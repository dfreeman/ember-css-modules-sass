'use strict';

// eslint-disable-next-line node/no-unpublished-require
const Plugin = require('ember-css-modules/lib/plugin');

module.exports = {
  name: 'ember-css-modules-sass',

  shouldIncludeChildAddon(addon) {
    // Don't infinitely recurse – it's the dummy test app that depends on dummy-addon, not this addon itself
    return addon.name.indexOf('dummy') === -1;
  },

  createCssModulesPlugin(parent) {
    return new SassPlugin(parent);
  }
};

class SassPlugin extends Plugin {
  constructor(parent) {
    super(parent);
    this._verifySetup(parent);
  }

  config() {
    return {
      intermediateOutputPath: this._intermediateOutputPath(),
      extension: 'scss',
      postcssOptions: {
        syntax: require('postcss-scss')
      }
    };
  }

  _intermediateOutputPath() {
    return this.isForAddon()
      ? 'addon.scss'
      : this._hasEmbroider()
      ? 'app.scss'
      : 'app/styles/app.scss';
  }

  _hasEmbroider() {
    return '@embroider/compat' in (this.parent.pkg.devDependencies || {});
  }

  _verifySetup(parent) {
    let hasEmberCliSass = parent.addons.some(addon => addon.name === 'ember-cli-sass');
    if (!hasEmberCliSass) {
      parent.ui.writeWarnLine(
        `Detected ember-css-modules-sass without ember-cli-sass. ` +
        `You'll need both in order for Sass processing to work correctly.`
      );
    }
  }
}
