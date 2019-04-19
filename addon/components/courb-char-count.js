import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/courb-char-count';

/**
 *
 * This component will show a `5/10` character count, and paint it red if the
 * count exceeds the maximum.
 *
 * ```hbs
 * {{courb-char-count
 *    count=5
 *    maxChars=10
 *    showAt=8
 *    animation="bounce-right"
 * }}
 * ```
 *
 * @class CourbCharCount
 * @public
 */
export default Component.extend({
  layout,

  tagName: 'span',
  classNames: ['courb-char-count'],

  classNameBindings: [
    'isVisible:visible:invisible',
    'isValid::text-red',
    'animation'
  ],

  /**
   * The character count
   * @type Number
   */
  count: 0,

  /**
   * The number of maximum possible characters
   * @type Number
   */
  maxChars: 0,

  /**
   * The character threshold when this component should become visible
   * @type Number?
   */
  showAt: 0,

  /**
   * The animation effect how the component will become visible.
   * Options are: bounce-right, bounce-bottom
   * @type String?
   */
  animation: null,

  /**
   * A flag to determine if component should be made visible
   * @type Boolean
   * @private
   * @readonly
   */
  isVisible: computed('count', 'showAt', function() {
    return this.count > this.showAt;
  }),

  /**
   * A flag to determine if the component should be colored red and marked
   * as invalid.
   * @type Boolean
   * @private
   * @readonly
   */
  isValid: computed('count', 'maxChars', function() {
    return this.count < this.maxChars;
  })
});
