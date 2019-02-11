import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('courb-button', module)
  .add(
    'block usage',
    () =>
      hbs`{{#courb-button}}<span style="color:tomato">my custom button content</span>{{/courb-button}}`,
    {
      notes: {
        markdown:
          '```{{#courb-button}}<span style="color:tomato">my custom button content</span>{{/courb-button}}```'
      }
    }
  )
  .add(
    'colors',
    () =>
      hbs`{{#courb-button}}default{{/courb-button}}
        {{#courb-button "blue"}}blue{{/courb-button}}
        {{#courb-button "green"}}green{{/courb-button}}
        {{#courb-button "yellow"}}yellow{{/courb-button}}
        {{#courb-button "gray"}}gray{{/courb-button}}
        {{#courb-button "light-gray"}}light-gray{{/courb-button}}
        {{#courb-button "fb"}}fb{{/courb-button}}
        {{#courb-button "goog"}}goog{{/courb-button}}`,
    {
      notes: {
        markdown:
          '```{{#courb-button "color-name"}}my button{{/courb-button}}```'
      }
    }
  )
  .add(
    'border',
    () =>
      hbs`{{#courb-button "light-gray" "gray-border"}}my button{{/courb-button}}
        {{#courb-button "light-gray" "blue-border"}}my button{{/courb-button}}`,
    {
      notes: {
        markdown:
          '```{{#courb-button "light-gray" "color-border"}}my button{{/courb-button}}```'
      }
    }
  )
  .add(
    'text',
    () =>
      hbs`{{#courb-button "light-gray" "blue-text"}}my button{{/courb-button}}`,
    {
      notes: {
        markdown:
          '```{{#courb-button "light-gray" "blue-text"}}my button{{/courb-button}}```'
      }
    }
  )
  .add(
    'full width',
    () => hbs`{{#courb-button "full-width"}}my button{{/courb-button}}`,
    {
      notes: {
        markdown:
          '```Expand button to full width of containing element. \n {{#courb-button "full-width"}}my button{{/courb-button}}```'
      }
    }
  )
  .add(
    'link button',
    () =>
      hbs`<a style="background-color: pink" class="courb-button courb-button--link">my button</a>`,
    {
      notes: {
        markdown:
          '```Style an `a` tag as button. \n <a style="background-color: pink" class="courb-button courb-button--link">my button</a>```'
      }
    }
  );
