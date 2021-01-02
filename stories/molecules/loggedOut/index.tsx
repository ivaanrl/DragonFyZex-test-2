import React from 'react';
import { Button } from '../../atoms/button';
import { LgAndUp, MdAndDown, StyledLoggedOut } from './styles';

export interface StyledLoggedOutProps {}

export interface LoggedOutProps extends StyledLoggedOutProps {
  onLogin?: () => void;
  onGetStarted?: () => void;
}

export const LoggedOut: React.FC<LoggedOutProps> = ({
  onLogin,
  onGetStarted,
}) => {
  return (
    <StyledLoggedOut>
      <LgAndUp>
        <Button noBorder={true} onClick={onLogin} transparent>
          Log in
        </Button>
      </LgAndUp>
      <Button primary={true} onClick={onGetStarted} fullWidth="lg">
        Get Started
      </Button>
      <MdAndDown>
        <Button onClick={onLogin} transparent fullWidth="lg">
          Log in
        </Button>
      </MdAndDown>
    </StyledLoggedOut>
  );
};
