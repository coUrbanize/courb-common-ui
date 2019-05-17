[![Codeship Status for coUrbanize/courb-common-ui](https://app.codeship.com/projects/01c57250-0c6e-0137-a8ff-5a09a73be971/status?branch=master)](https://app.codeship.com/projects/326533)

# courb-common-ui

This Ember addon is a UI component library to share common styles and components between coUrbanize Ember applications.

## Installation

Run the following code to install the addon in an Ember application:

```
ember install @courbanize/courb-common-ui
```

## Documentation and Style guide

The addon uses [Ember CLI AddonDocs](https://ember-learn.github.io/ember-cli-addon-docs/) to render documentation and a style guide on Github pages.

[Courb Common UI](https://courbanize.github.io/courb-common-ui/versions/master/)

To publish a new version to Github pages, run:

```
ember deploy production
```

*Note: the style guide and documentation content is a Work in Progress.*

## Included components

Please refer to the [docs](https://courbanize.github.io/courb-common-ui/versions/master/docs) for detailed information about each component.

* courb-button
* courb-tooltip
* courb-input
* courb-char-count

## Contributing

### Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

- `ember serve`
- Visit the documentation and style guide at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

### Releasing a new version to NPM

- `git checkout master`
- `yarn version --minor`
- `git push`
- `git push --tags`
- `yarn publish --access public`

## License

This project is licensed under the [MIT License](LICENSE.md).
