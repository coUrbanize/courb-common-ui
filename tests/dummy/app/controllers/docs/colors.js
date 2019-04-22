import Controller from "@ember/controller";

export default Controller.extend({
  init() {
    this._super(...arguments);
    const greens = [
      { name: 'lightgreen', base: '#53ceac'},
      { name: 'green', base: '#2fb390'},
      { name: 'bluegreen', base: '#32af8e'},
      { name: 'turquoise', base: '#b3e4d7' },
      { name: 'darkturquoise', base: '#9ac0b6' },
      { name: 'darkbluegreen', base: '#197979' },
    ];
    const yellows = [
      { name: 'lightyellow', base: '#fcc83f' },
      { name: 'yellow', base: '#fdc92a' },
      { name: 'darkyellow', base: '#d5aa25' },
    ];
    const blues = [
      { name: 'lightblue', base: '#a7ddf6' },
      { name: 'brightblue', base: '#008abb' },
      { name: 'mediumblue', base: '#09c' },
      { name: 'cobalt', base: '#3666c6' },
      { name: 'blue', base: '#347192' },
      { name: 'deepblue', base: '#213949' },
    ];
    const grays = [
      { name: 'graygreen', base: '#9ac0b6'},
      { name: 'asphalt', base: '#6a7b82' },
      { name: 'darkasphalt', base: '#324349' },
    ];
    const reds = [
      { name: 'lightred', base: '#f6a2a2' },
      { name: 'flatred', base: '#da5151' },
      { name: 'coralred', base: '#e22a4f' },
    ];
    this.set("greens", greens);
    this.set("yellows", yellows);
    this.set("blues", blues);
    this.set("grays", grays);
    this.set("reds", reds);
  }
});