import Component from '@ember/component';
import layout from '../templates/components/courb-button';
import { set } from '@ember/object';

/**
 * `{{courb-button}}` will render a `<button/>` element in a given state.
 * The button state can be controlled via positional parameters. Posiitional
 * parameters will be used as class names using the BEM (Block Element Modifier)
 * CSS naming convention.
 *
 * For example
 * ```
 * {{courb-button "green" "small"}}
 * ```
 * will render the following HTML element:
 * ```
 * <button class="courb-button--green courb-button--small">
 * ```
 *
 * For triggering the `click` event, add a `click` attribute to the component
 * instantiation.
 *
 * Another example usage:
 * ```hbs
 * {#courb-button "green" "small" click=(action (mut myProp) false) data-test-selector="my-button"}}
 * My Button Label
 * {{/courb-button}}
 * ```
 *
 * @class CourbButton
 * @type Ember.Component
 */
const CourbButton = Component.extend({
  layout,
  tagName: 'button',
  classNames: ['courb-button'],

  attributeBindings: ['type', 'disabled'],

  init() {
    this._super(...arguments);

    if (this.modifiers) {
      const modifiers = this.modifiers.map(m => `courb-button--${m}`);
      const classNames = this.classNames.concat(modifiers);
      set(this, 'classNames', classNames);
    }
  },

  /**
   * The button type attribute, defaults to "button".
   * @argument type
   * @type String?
   */
  type: 'button'
});

CourbButton.reopenClass({
  // Modifiers according to BEM naming convention
  positionalParams: 'modifiers'
});

export default CourbButton;
