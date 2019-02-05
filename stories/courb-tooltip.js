import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('courb-tooltip', module)
  .add(
    'default top placement',
    () =>
      hbs`<button style="margin-top: 20%; margin-left: 20%">{{#courb-tooltip title="tooltip text"}}coUrbanize{{/courb-tooltip}}</button>`,
    {
      notes: {
        markdown:
          '```{{#courb-tooltip title="tooltip text"}}coUrbanize{{/courb-tooltip}}```'
      }
    }
  )
  .add(
    'custom placement',
    () =>
      hbs`<button style="margin-top: 20%; margin-left: 20%">{{#courb-tooltip title="tooltip text placed right" options=(hash placement="right")}}coUrbanize{{/courb-tooltip}}</button>`,
    {
      notes: {
        markdown:
          'The `options` parameter will accept an options hash with any property that is supported by [tooltip.js](https://popper.js.org/tooltip-documentation.html), `placement` being the most important one. \n ```{{#courb-tooltip title="tooltip text placed right" options=(hash placement="right")}}coUrbanize{{/courb-tooltip}}```'
      }
    }
  );
