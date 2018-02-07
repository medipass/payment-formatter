import * as handlers from './handlers';
import * as utils from './utils';

export default ({cardType, inputType, selector}) => {
  if (cardType && typeof cardType !== 'string') {
    throw new TypeError(`Expected \`cardType\` to be a string, got ${typeof cardType}`);
  }
  if (typeof inputType !== 'string') {
    throw new TypeError(`Expected \`inputType\` to be a string, got ${typeof inputType}`);
  }
  if (typeof selector !== 'string') {
    throw new TypeError(`Expected \`selector\` to be a string, got ${typeof selector}`);
  }
  if (!utils.INPUT_TYPES.includes(inputType)) {
    throw new Error(`Expected \`inputType\` to be ${utils.INPUT_TYPES.join(',')} - got ${inputType}`);
  }

  const element = document.querySelector(selector);
  element.addEventListener('keypress', e => e && handlers.restrictInput({e, inputType}), false);
  element.addEventListener('keypress', e => e && handlers.restrictLength({cardType, e, inputType}), false);
  element.addEventListener('input', e => e && handlers.formatInput({element, inputType, value: e.target.value}), false);

  return null;
};
