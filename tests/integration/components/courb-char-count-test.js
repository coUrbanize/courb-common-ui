import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | courb-char-count', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with defaults', async function(assert) {
    await render(hbs`{{courb-char-count}}`);
    // INFO: spaces are &thinsp;
    assert.dom('span.courb-char-count').hasText('0 / 0');
  });

  test('it is invisible if count < showAt threshold', async function(assert) {
    await render(hbs`{{courb-char-count count=5 showAt=8 maxChars=10}}`);
    assert.dom('span.courb-char-count').isNotVisible();
    assert.dom('span.courb-char-count').hasText('5 / 10');
  });

  test('it is invisible if count > showAt threshold', async function(assert) {
    await render(hbs`{{courb-char-count count=5 showAt=3 maxChars=10}}`);
    assert.dom('span.courb-char-count').isVisible();
    assert.dom('span.courb-char-count').hasText('5 / 10');
  });

  test('it is not rendered red if count < maxChars', async function(assert) {
    await render(hbs`{{courb-char-count count=8 maxChars=10}}`);
    assert.dom('span.courb-char-count').doesNotHaveClass('text-red');
    assert.dom('span.courb-char-count').hasText('8 / 10');
  });

  test('it is rendered red if count > maxChars', async function(assert) {
    await render(hbs`{{courb-char-count count=10 maxChars=10}}`);
    assert.dom('span.courb-char-count').hasClass('text-red');
    assert.dom('span.courb-char-count').hasText('10 / 10');
  });
});
