import $ from 'jquery';
import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | verify styles v2', function(hooks) {
  setupApplicationTest(hooks);

  test('app and addon styles are processed', async function(assert) {
    await visit('/');

    let $appComponent = $('[data-app-component]');
    let $addonComponent = $('[data-addon-component]');

    assert.equal(window.getComputedStyle($appComponent[0]).fontFamily, 'app');
    assert.equal(window.getComputedStyle($addonComponent[0]).fontFamily, 'addon');
  });
});
