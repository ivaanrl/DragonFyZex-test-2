import React from 'react';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../styles/globalStyles';
import { Container, LoginButton, GetStartedButton } from './rightItemsStyles';

const RightItems = () => {
  return (
    <Container>
      <LoginButton className="navbar-link h-12 remove-button-outline border border-gray-400 rounded-full mb-5 lg:mb-0 lg:border-transparent order-2 lg:order-1">
        Log in
      </LoginButton>
      <GetStartedButton className="button primary-button remove-button-outline h-12 mb-5 lg:mb-0 lg:order-2">
        Get started
      </GetStartedButton>
    </Container>
  );
};

export default RightItems;
