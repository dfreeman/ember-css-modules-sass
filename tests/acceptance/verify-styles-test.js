import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | verify styles', function(hooks) {
  setupApplicationTest(hooks);

  test('app and addon styles are processed', async function(assert) {
    await visit('/');

    let appComponent = this.element.querySelector('[data-app-component]');
    let addonComponent = this.element.querySelector('[data-addon-component]');

    assert.equal(window.getComputedStyle(appComponent).fontFamily, 'app');
    assert.equal(window.getComputedStyle(addonComponent).fontFamily, 'addon');
  });
});
