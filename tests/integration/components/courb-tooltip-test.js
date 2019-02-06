import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | courb-tooltip', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Template block usage:
    await render(hbs`
      {{#courb-tooltip}}
        template block text
      {{/courb-tooltip}}
    `);
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
