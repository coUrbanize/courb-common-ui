'use strict';

const buildTailwind = require('ember-cli-tailwind/lib/build-tailwind');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  config(env, baseConfig) {
    const config = {
      'ember-cli-tailwind': {
        shouldIncludeStyleguide: false,
        shouldBuildTailwind: false
      }
    };

    const updatedConfig = Object.assign({}, baseConfig, config);

    return updatedConfig;
  },

  treeForAddonStyles(tree) {
    const trees = tree ? [tree] : [];
    trees.push(buildTailwind(this));
    return new MergeTrees(trees);
  }
};
