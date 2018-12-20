import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('courb-tooltip', module).add(
  'default position',
  () =>
    hbs`{{#courb-tooltip title="online community engagement solution"}}coUrbanize{{/courb-tooltip}}`,
  {
    notes: {
      markdown:
        '```{{#courb-tooltip title="online community engagement solution"}}coUrbanize{{/courb-tooltip}}```'
    }
  }
);
