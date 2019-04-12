# Form elements

## CourbButton

`{{courb-button}}` will render a `<button/>` element. It accepts positional parameters to configure buttons states.

{{#docs-demo as |demo|}}
  {{#demo.example name='courb-button-demo.hbs'}}
    {{#courb-button "green"}}
      My Button
    {{/courb-button}}
  {{/demo.example}}

  {{demo.snippet 'courb-button-demo.hbs'}}
{{/docs-demo}}

### States & Styles

Positional params are translated to modifiers on the `<button/> ` element, 
following the BEM (Block Element Modifier) CSS naming convention.

{{#docs-demo as |demo|}}
  {{#demo.example name='courb-button-params.hbs'}}
    {{#courb-button "blue"}}blue{{/courb-button}}
    {{#courb-button "green"}}green{{/courb-button}}
    {{#courb-button "yellow"}}yellow{{/courb-button}}
    {{#courb-button "gray"}}gray{{/courb-button}}
    {{#courb-button "light-gray"}}light-gray{{/courb-button}}
    {{#courb-button "fb"}}fb{{/courb-button}}
    {{#courb-button "goog"}}goog{{/courb-button}}
    {{#courb-button "small" "gray"}}small{{/courb-button}}
    {{#courb-button "green" disabled=true}}disabled green{{/courb-button}}
  {{/demo.example}}
{{/docs-demo}}

### Interaction

To trigger an action on a button-click, use the `click` method (an Ember Component default).

{{#docs-snippet name='courb-button-action-demo.hbs'}}
  {{#courb-button "green" click=(action (mut myProp) false)}}
    Button with Action
  {{/courb-button}}
{{/docs-snippet}}

## Anchor Button

The styles used to render the `{{courb-button}}` component can also be applied to anchors:

{{#docs-snippet name="anchor-button-snippet.html" language="html"}}
  <a class="courb-button courb-button--link courb-button--yellow">My Button</a>
{{/docs-snippet}}
