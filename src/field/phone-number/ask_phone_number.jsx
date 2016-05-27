import React from 'react';
import Screen from '../../core/screen';
import PhoneNumberPane from './phone_number_pane';
import { renderAskLocation } from './ask_location';
import { cancelSelectPhoneLocation } from './actions';
import { selectingLocation } from './index';

const Component = ({focusSubmit, i18n, model}) => (
  <PhoneNumberPane
    focusSubmit={focusSubmit}
    lock={model}
    placeholder={i18n.str("phoneNumberInputPlaceholder")}
  />
);

export default class AskPhoneNumber extends Screen {

  constructor() {
    super("phone");
  }

  escHandler(lock) {
    return selectingLocation(lock) ? cancelSelectPhoneLocation : null;
  }

  renderAuxiliaryPane(lock) {
    return renderAskLocation(lock);
  }

  render() {
    return Component;
  }

}
