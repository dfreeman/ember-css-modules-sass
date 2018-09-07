'use strict';

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
      intermediateOutputPath: this.isForAddon() ? 'addon.scss' : 'app/styles/app.scss',
      extension: 'scss',
      postcssOptions: {
        syntax: require('postcss-scss')
      }
    };
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
