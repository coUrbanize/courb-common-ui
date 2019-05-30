import Component from '@ember/component';
import layout from '../templates/components/courb-tooltip';
import { set } from '@ember/object';
import { copy } from '@ember/object/internals';
import Tooltip from 'tooltip.js';

// TODO: warning of "missing item type"
// WARNING:  @courbanize/courb-common-ui/components/courb-tooltip.js:7: Missing item type

/**
 * A component that wraps [tooltip.js](https://popper.js.org/tooltip-documentation.html), to be used as block:
 *
 * ```hbs
 *   {{#courb-tooltip
 *     title="tooltip text"
 *     options=(hash placement="top")}}
 *       <button>my button</button>
 *   {{/courb-tooltip}}
 * ```
 * @class {{courb-tooltip}}
 */
export default Component.extend({
  layout,
  classNames: ['courb-tooltip'],

  /**
   * Tooltip.js options: a hash of supported key/value pairs as supported
   * by [tooltip.js](https://popper.js.org/tooltip-documentation.html),
   * `placement` being the most common one.
   * @argument options
   * @type Object?
   */
  options: null,

  didInsertElement() {
    const options = this.options ? copy(this.options) : {};
    // if title is undefined, Tooltip will not instantiate
    options.title = this.title || 'tooltip';
    const tooltipInstance = new Tooltip(this.element.firstChild, options);
    set(this, 'tooltip', tooltipInstance);
  },

  didUpdateAttrs() {
    this.tooltip.updateTitleContent(this.title);
  },

  willDestroyElement() {
    if (!this.tooltip) {
      return;
    }
    this.tooltip.dispose();
  }
});
