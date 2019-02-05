import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('Fonts', module)
  .add(
    'Continous Text',
    () =>
      hbs`<p class="body">Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</p> <p class="body body--medium">Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</p>`,
    {
      notes: {
        markdown: 'BEM classes \n ```.body --medium```'
      }
    }
  )
  .add(
    'Headers',
    () =>
      hbs`<h1 class="h1">Header 1</h1>
        <h1 class="h1 h1--medium">Header 1 medium</h1>
        <h1 class="h1 h1--large">Header 1 large</h1>
        <h1 class="h1 h1--light-gray">Header 1 light-gray</h1>
        <h2 class="h2--medium-uppercase gray-light">H2/Heading 2</h2>
        <h3 class="h3-roboto--medium">H3/Heading 3</h3>`,
    {
      notes: {
        markdown:
          'BEM classes \n ```.h1 --medium --large --light-gray --forest-green \n .h2 --small --medium --medium-uppercase --align-center --green --slate-light --slate-dark```'
      }
    }
  )
  .add(
    'Green',
    () =>
      hbs`<h2 class="h2--green">H2/Green</h2>
        <h3 class=h3--green>H3/Green</h3>`
  )
  .add(
    'Product Feature',
    () => hbs`<h3 class="h3--forest-green">H3/Product Feature</h3>`
  )
  .add(
    'Page Header',
    () => hbs`<h1 class="h1--large gray-light">H1/Page Header</h1>`
  )
  .add(
    'Feature',
    () =>
      hbs`<h2 class="h2--slate-dark">H2/Feature</h2>
          <h3 class="h3--slate-dark">H3/Feature</h3>`
  );
