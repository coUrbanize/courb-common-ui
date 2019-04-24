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
 * @class CourbInput
 * @public
 */
export default Component.extend({
  layout,
  classNames: ['courb-input'],

  /**
   * The input name
   * @type String?
   */
  name: null,

  /**
   * The input value
   * @type String?
   */
  value: null,

  /**
   * Maximum length of the value, will be enforced in input-action
   * @type Number?
   */
  maxLength: null,

  /**
   * <input> type attripute
   * @type String
   */
  type: 'text',

  /**
   * <input> placeholder attribute
   * @type String?
   */
  placeholder: null,

  /**
   * <input> disabled attribute
   * @type Boolean?
   */
  disabled: false,

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
