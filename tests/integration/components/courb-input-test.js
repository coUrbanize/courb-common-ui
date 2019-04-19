import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | courb-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(
      hbs`{{courb-input value="my value" name="my-name" placeholder="my placeholder text" }}`
    );

    assert.dom('input').exists();
    assert.dom('input').hasValue('my value');
    assert.dom('input').hasAttribute('name', 'my-name');
    assert.dom('input').hasAttribute('placeholder', 'my placeholder text');

    await render(hbs`
      {{#courb-input}}
        <span class="wrapped-content">hello courb-input</span>
      {{/courb-input}}
    `);

    assert.dom('input').exists();
    assert.dom('.wrapped-content').hasText('hello courb-input');
  });

  test('it calls `oninput` action on input-event', async function(assert) {
    this.set('inputValue', '');
    await render(hbs`{{courb-input oninput=(action (mut inputValue))}}`);

    await fillIn('input', 'my input');
    assert.dom('input').hasValue('my input');
    assert.equal(this.inputValue, 'my input');
  });

  test('it limits input value to a maxLength', async function(assert) {
    this.set('inputValue', '');
    await render(
      hbs`{{courb-input maxLength=2 oninput=(action (mut inputValue))}}`
    );

    await fillIn('input', 'my input is too long');
    assert.dom('input').hasValue('my');
    assert.equal(this.inputValue, 'my');
  });
});
