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
  const stories = require.context('../stories', true, /.js/);
  stories.keys().forEach(filename => stories(filename));
}

configure(loadStories, module);
