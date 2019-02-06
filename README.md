[![Codeship Status for coUrbanize/courb-common-ui](https://app.codeship.com/projects/01c57250-0c6e-0137-a8ff-5a09a73be971/status?branch=master)](https://app.codeship.com/projects/326533)

# courb-common-ui

This Ember addon is a UI component library to share common styles and components between coUrbanize Ember applications.

## Installation

Run the following code to install the addon in an Ember application:

```
ember install @courbanize/courb-common-ui
```

## Included components

### courb-tooltip

A component that wraps [tooltip.js](https://popper.js.org/tooltip-documentation.html), to be used as block:

```
  {{#courb-tooltip
    title="tooltip text"
    options=(hash placement="top")}}
      <button>my button</button>
  {{/courb-tooltip}}
```

The `options` parameter accepts a hash of properties as supported by [tooltip.js](https://popper.js.org/tooltip-documentation.html), `placement` being the most common one.

### courb-button

A simple component the renders a button tag. Positional params will be applied to element modifiers following the BEM CSS naming convention and create different button versions.

```
  {{#courb-button "green"}}my button{{/courb-button}}
```

Will result in following HTML:

```
  <button class="courb-button courb-button--green">my button</button>
```

The Storybook has a display of all implemented styles.

#### Actions

Use the `click` Component property to trigger actions:

```
  {{#courb-button click=(action "myAction")}}my button{{/my-button}}
```

## Storybook

[Storybook](https://storybook.js.org) is a living styleguide. It allows to organize and display components with different states.

Start the Storybook development server with:

```
yarn run storybook
```

It will open a browser and display the coUrbanize Common UI storybook at http://localhost:9001.

### Adding stories

Stories are created in `/stories`. Please see the [Storybook docs](https://storybook.js.org/basics/writing-stories/) for details on how to create write stories.

### Existign stories:

- courb-tooltip
- courb-button
- fonts (WIP)

## Contributing

### Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

- `ember serve`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

### Releasing a new version to NPM

- `yarn version --minor`
- `git push`
- `git push --tags`
- `yarn publish --access public`

## License

This project is licensed under the [MIT License](LICENSE.md).
