import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('Fonts', module)
  .add('Header', () =>
    hbs`<h1 class="h1--medium gray-light">H1/Heading 1</h1>
        <h2 class="h2--medium-uppercase gray-light">H2/Heading 2</h2>
        <h3 class="h3-roboto--medium">H3/Heading 3</h3>`)
  .add('Body', () =>
    hbs`<div>Medium Body Text</div>`
  )
  .add('Green', () =>
    hbs`<h2 class="h2--green">H2/Green</h2>
        <h3 class=h3--green>H3/Green</h3>`
  )
  .add('Product Feature', () =>
      hbs`<h3 class="h3--forest-green">H3/Product Feature</h3>`)
  .add('Page Header',() =>
      hbs`<h1 class="h1--large gray-light">H1/Page Header</h1>`)
  .add('Feature',() =>
      hbs`<h2 class="h2--slate-dark">H2/Feature</h2>
          <h3 class="h3--slate-dark">H3/Feature</h3>`)
