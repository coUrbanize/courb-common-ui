import Component from '@ember/component';
import layout from '../templates/components/courb-button';
import { set } from '@ember/object';

const CourbButton = Component.extend({
  layout,
  tagName: 'button',
  classNames: ['courb-button'],

  attributeBindings: ['type', 'disabled'],

  init() {
    this._super(...arguments);

    set(this, 'type', this.type || 'button');

    if (this.modifiers) {
      // set class names according to BEM naming convention
      const modifiers = this.modifiers.map(m => `courb-button--${m}`);
      const classNames = this.classNames.concat(modifiers);
      set(this, 'classNames', classNames);
    }
  }
});

CourbButton.reopenClass({
  // Modifiers according to BEM naming convention
  positionalParams: 'modifiers'
});

export default CourbButton;
