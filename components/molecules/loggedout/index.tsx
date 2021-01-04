import { FC } from 'react';
import { theme } from '../../../styles/theme';
import { Button } from '../../atoms';
import { BigScreenWrapper, SmallScreenWrapper } from './styles';
import MobileMenuToggle from '../mobileMenuToggle';

interface LoggedOutProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const LoggedOut: FC<LoggedOutProps> = ({ isOpen, toggleOpen }) => {
  return (
    <>
      <BigScreenWrapper>
        <Button
          backgroundColor={theme.colors.transparent}
          borderColor={theme.colors.transparent}
          marginRight={34}
          height={'3rem'}
          borderRadius={9999}
          paddingLeft={34}
          paddingRight={34}
          fontSize={16}
          fontWeight={600}
          hoverColor={theme.colors.skGreen}
        >
          Log in
        </Button>
        <Button
          backgroundColor={theme.colors.skGreen}
          height={'3rem'}
          borderRadius={9999}
          paddingLeft={34}
          paddingRight={34}
          color={theme.colors.lightGrey}
          fontSize={16}
          fontWeight={600}
          hoverBackgroundColor={theme.colors.skBlack}
        >
          Get started
        </Button>
      </BigScreenWrapper>
      <SmallScreenWrapper>
        <MobileMenuToggle isOpen={isOpen} toggleOpen={toggleOpen} />
      </SmallScreenWrapper>
    </>
  );
};

export default LoggedOut;
