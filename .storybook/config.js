import { configure, addDecorator } from '@storybook/ember';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';

addDecorator(
  withOptions({
    name: 'coUrbanize Common UI',
  })
);

addDecorator(withNotes);

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
