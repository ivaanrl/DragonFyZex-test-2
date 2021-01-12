import { FC } from 'react';
import { theme } from '../../../styles/theme';
import { Button } from '../../atoms';

interface MobileMenuToggleProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const MobileMenuToggle: FC<MobileMenuToggleProps> = ({
  isOpen,
  toggleOpen,
}) => {
  return (
    <Button
      backgroundColor={isOpen ? theme.colors.skGreen : theme.colors.transparent}
      border={'1px solid'}
      borderRadius={'100%'}
      padding={isOpen ? 2 : 1}
      borderColor={theme.colors.borderGreyDark}
      onClick={toggleOpen}
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          width="14"
          height="14"
          style={{
            width: '1rem',
            height: '1rem',
          }}
        >
          <path
            d="M11.78.865L6.513 6.13 1.247.865.005 2.106l5.267 5.267L.005 12.64l1.242 1.241 5.266-5.266 5.267 5.266 1.242-1.241-5.267-5.267 5.267-5.267L11.78.865z"
            fill={theme.colors.white}
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: '1.5rem',
            height: '1.5rem',
          }}
          aria-hidden="true"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke={theme.colors.borderGreyDark}
          ></path>
        </svg>
      )}
    </Button>
  );
};

export default MobileMenuToggle;
