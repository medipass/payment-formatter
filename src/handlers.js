import * as utils from './utils';

export const formatInput = ({element, inputType, value}) => {
  if (!value) {
    return null;
  }
  if (inputType === utils.INPUT_TYPE_CARD_NUMBER) {
    const cardType = utils.getCardTypeByValue(value);
    if (cardType) {
      element.value = utils.formatCardNumber(value, cardType.format);
    }
  } else if (inputType === utils.INPUT_TYPE_EXPIRY) {
    element.value = utils.formatExpiry(value);
  }
  return null;
};
export const restrictInput = ({e, inputType}) => {
  const key = e.key;
  const value = e.target.value;
  if (
    !utils.isInputNumeric(e) ||
    (inputType === utils.INPUT_TYPE_EXPIRY && !utils.isKeyValid(key, value) && !utils.isHighlighted())
  ) {
    e.preventDefault();
  }
};
export const restrictLength = ({cardType, e, inputType}) => {
  const value = e.target.value;
  if (utils.isHighlighted()) {
    return null;
  }
  if (inputType === utils.INPUT_TYPE_CARD_NUMBER) {
    const valueLength = value.split(' ').join('').length;
    if (utils.hasCardNumberReachedMaxLength(value, valueLength)) {
      e.preventDefault();
    }
  } else if (inputType === utils.INPUT_TYPE_EXPIRY) {
    const valueLength = value.split('/').join('').length;
    if (valueLength >= 4) {
      e.preventDefault();
    }
  } else if (inputType === utils.INPUT_TYPE_CVC) {
    const valueLength = value.length;
    if (utils.hasCVCReachedMaxLength(cardType, valueLength)) {
      e.preventDefault();
    }
  }
  return null;
};
