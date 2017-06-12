/* eslint-env node */
'use strict';

module.exports = {
  name: 'dummy-addon',

  hintingEnabled: function() {
    return false;
  },

  isDevelopingAddon: function() {
    return true;
  }
};
