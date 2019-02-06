import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('courb-tooltip', module)
  .add(
    'default top placement',
    () =>
      hbs`{{#courb-tooltip title="tooltip text"}}<button>my button</button>{{/courb-tooltip}}`,
    {
      notes: {
        markdown:
          '```{{#courb-tooltip title="tooltip text"}}<button>my button</button>{{/courb-tooltip}}```'
      }
    }
  )
  .add(
    'custom placement',
    () =>
      hbs`{{#courb-tooltip title="tooltip text placed right" options=(hash placement="right")}}<button>my button</button>{{/courb-tooltip}}`,
    {
      notes: {
        markdown:
          'The `options` parameter will accept an options hash with any property that is supported by [tooltip.js](https://popper.js.org/tooltip-documentation.html), `placement` being the most common one. \n ```{{#courb-tooltip title="tooltip text placed right" options=(hash placement="right")}}<button>my button</button>{{/courb-tooltip}}```'
      }
    }
  );
