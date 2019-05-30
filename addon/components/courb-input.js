import Component from '@ember/component';
import layout from '../templates/components/courb-input';

/**
 * A `input` form element rendered inside a `div`.
 *
 * ```hbs
 * {{courb-input
 *    value=user.firstName
 *    name="firstName"
 *    maxLength=20
 *    oninput=(action (mut user.firstName))
 * }}
 * ```
 *
 * @class {{courb-input}}
 */
export default Component.extend({
  layout,
  classNames: ['courb-input'],

  /**
   * The input name
   * @argument name
   * @type String?
   */
  name: null,

  /**
   * The input value
   * @argument value
   * @type String?
   */
  value: null,

  /**
   * Maximum length of the value, will be enforced in input-action
   * @argument maxLength
   * @type Number?
   */
  maxLength: null,

  /**
   * `<input>` type attripute
   * @argument type
   * @type String
   */
  type: 'text',

  /**
   * `<input>` placeholder attribute
   * @argument placeholder
   * @type String?
   */
  placeholder: null,

  /**
   * `<input>` disabled attribute
   * @argument disabled
   * @type Boolean?
   */
  disabled: false,

  /**
   * Action handler for `<input>` input event
   * @argument oninput
   * @type Action?
   */
  oninput() {
    return;
  },

  /**
   * Action handler for `<input>` blur event
   * @argument onblur
   * @type Action?
   */
  onblur() {
    return;
  },

  /**
   * Action handler for `<input>` focus event
   * @argument onfocus
   * @type Action?
   */
  onfocus() {
    return;
  },

  actions: {
    /**
     * Call given `oninput` action with input value. If `maxLength` property is
     * set, the char number of value will be limited to it.
     * @action setValidProperty
     * @param { target } HTMLInputEvent
     */
    setValidProperty({ target }) {
      const value = this.maxLength
        ? target.value.slice(0, this.maxLength)
        : target.value;
      target.value = value;
      this.oninput(value);
    }
  }
});
