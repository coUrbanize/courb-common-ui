import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | courb-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#courb-button}}
        my button text
      {{/courb-button}}
    `);

    assert.equal(this.element.textContent.trim(), 'my button text');
  });

  test('it accepts BEM modifiers', async function(assert) {
    await render(hbs`
      {{#courb-button "green" "small"}}
        my button text
      {{/courb-button}}
    `);

    assert.ok(
      find('.courb-button').classList.contains('courb-button--green'),
      'It adds --green modifier'
    );
    assert.ok(
      find('.courb-button').classList.contains('courb-button--small'),
      'It adds --small modifier'
    );
  });
});
