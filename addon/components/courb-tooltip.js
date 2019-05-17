import Component from '@ember/component';
import layout from '../templates/components/courb-tooltip';
import { set } from '@ember/object';
import { copy } from '@ember/object/internals';
import Tooltip from 'tooltip.js';

/**
 * A component that wraps [tooltip.js](https://popper.js.org/tooltip-documentation.html), to be used as block:

```
  {{#courb-tooltip
    title="tooltip text"
    options=(hash placement="top")}}
      <button>my button</button>
  {{/courb-tooltip}}
```

The `options` parameter accepts a hash of properties as supported by [tooltip.js](https://popper.js.org/tooltip-documentation.html), `placement` being the most common one.
 */
export default Component.extend({
  layout,
  classNames: ['courb-tooltip'],

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
