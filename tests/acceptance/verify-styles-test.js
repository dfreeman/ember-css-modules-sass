import { test } from 'qunit';
import $ from 'jquery';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | verify styles');

test('app and addon styles are processed', function(assert) {
  visit('/');

  andThen(function() {
    let $appComponent = $('[data-app-component]');
    let $addonComponent = $('[data-addon-component]');

    assert.equal(window.getComputedStyle($appComponent[0]).fontFamily, 'app');
    assert.equal(window.getComputedStyle($addonComponent[0]).fontFamily, 'addon');
  });
});
