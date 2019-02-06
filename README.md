# courb-common-ui

This Ember addon is a UI component library to share common styles and components between coUrbanize Ember applications.

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

## Storybook

[Storybook](https://storybook.js.org) is a living styleguide. It allows to organize and display components with different states.

Once you have cloned this repo and installed all dependencies with `yarn`, you can start the storybook server with:

```
yarn run storybook
```

It will open a browser and display the coUrbanize Common UI storybook at http://localhost:9001 .

##### Stories:

- `courb-tooltip.js`
- `fonts.js`

### Adding stories

Stories are created in `/stories`. Please see the [Storybook docs](https://storybook.js.org/basics/writing-stories/) for details on how to create write stories.

## Installation

Run the following code to install the addon in an Ember application:

```
ember install @courbanize/courb-common-ui
```

### Usage

The addon will import components and styles upon installation.

## Contributing

### Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

- `ember serve`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## License

This project is licensed under the [MIT License](LICENSE.md).
