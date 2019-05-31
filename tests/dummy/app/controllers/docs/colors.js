import Controller from '@ember/controller';
import tailwindColors from '@courbanize/courb-common-ui/tailwind/config/colors';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('tailwindColors', tailwindColors);
    this.set('colorSets', {
      base: ['black', 'white'],
      transparency: ['transparent', 'transparent-black-20'],
      grayscale: [
        'cool-gray-100',
        'cool-gray-200',
        'cool-gray-300',
        'cool-gray-400',
        'cool-gray-500',
        'cool-gray-600',
        'cool-gray-700',
        'cool-gray-800'
      ],
      brandColors: [
        [
          'courb-orange-100',
          'courb-orange-300',
          'courb-orange-400',
          'courb-orange-500',
          'courb-orange-800'
        ],
        [
          'courb-yellow-100',
          'courb-yellow-300',
          'courb-yellow-400',
          'courb-yellow-500',
          'courb-yellow-800'
        ],
        [
          'courb-green-100',
          'courb-green-300',
          'courb-green-400',
          'courb-green-500',
          'courb-green-800'
        ],
        [
          'courb-blue-100',
          'courb-blue-300',
          'courb-blue-400',
          'courb-blue-500',
          'courb-blue-800'
        ]
      ],
      mapPinColors: [
        'pin-green',
        'pin-yellow',
        'pin-orange',
        'pin-red',
        'pin-purple',
        'pin-blue',
        'pin-gray'
      ],
      utilityMessageColors: [
        ['warning-yellow-text', 'warning-yellow', 'warning-yellow-bg'],
        ['notice-blue-text', 'notice-blue', 'notice-blue-bg'],
        ['error-red-text', 'error-red', 'error-red-bg'],
        ['success-green-text', 'success-green', 'success-green-bg']
      ],
      otherBrands: [
        'google-red',
        'google-red-light',
        'facebook-blue',
        'facebook-blue-light'
      ]
    });
  }
});
