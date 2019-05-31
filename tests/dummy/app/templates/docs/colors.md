## Colors

Below you'll find hex codes and color names for all of the colors we're using.

### Usage

The color palette is currently implemented in Tailwind and available via its utility classes.

{{#docs-demo as |demo|}}
  {{#demo.example name='color-demo.hbs'}}
    <p class="text-courb-blue-500 bg-courb-yellow-300 border border-courb-green-500 p-4">
      Blue text on yellow background with green border
    </p>
  {{/demo.example}}

  {{demo.snippet 'color-demo.hbs'}}
{{/docs-demo}}

### Base
{{#each colorSets.base as |colorName|}}
  {{color-swatch name=colorName hexcode=(get tailwindColors colorName)}}
{{/each}}

### Grayscale
{{#each colorSets.grayscale as |colorName|}}
  {{color-swatch name=colorName hexcode=(get tailwindColors colorName)}}
{{/each}}

### Brand Colors
{{#each colorSets.brandColors as |set|}}
  <div>
    {{#each set as |colorName|}}
      {{color-swatch name=colorName hexcode=(get tailwindColors colorName)}}
    {{/each}}
  </div>  
{{/each}}

### Map Pin Colors
{{#each colorSets.mapPinColors as |colorName|}}
  {{color-swatch name=colorName hexcode=(get tailwindColors colorName)}}
{{/each}}

### Utility Message Colors
{{#each colorSets.utilityMessageColors as |set|}}
  <div>
    {{#each set as |colorName|}}
      {{color-swatch name=colorName hexcode=(get tailwindColors colorName)}}
    {{/each}}
  </div>  
{{/each}}

### Transparent
{{#each colorSets.transparency as |colorName|}}
  {{color-swatch name=colorName hexcode=(get tailwindColors colorName)}}
{{/each}}

### Other Brand Colors
{{#each colorSets.otherBrands as |colorName|}}
  {{color-swatch name=colorName hexcode=(get tailwindColors colorName)}}
{{/each}}
