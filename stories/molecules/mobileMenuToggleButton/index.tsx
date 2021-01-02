import React from 'react';
import { theme } from '../../../styles/theme';
import { Button } from '../../atoms/button';

export interface MobileMenuToggleButtonProps {
  isOpen: boolean;
  toggleOpen: () => void;
  openSvgFill?: string;
  closedSvgFill?: string;
  borderColor?: string;
}

export const MobileMenuToggleButton: React.FC<MobileMenuToggleButtonProps> = ({
  isOpen,
  toggleOpen,
  openSvgFill = theme.white,
  closedSvgFill = theme.borderGreyDark,
  borderColor = theme.borderGreyDark,
}) => {
  return (
    <Button
      size="small"
      onClick={toggleOpen}
      fullRounded
      primary={isOpen}
      borderColor={borderColor}
      styles={{ backgroundColor: isOpen ? theme.skGreen : theme.yellow }}
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
            fill={openSvgFill}
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
            stroke={closedSvgFill}
          ></path>
        </svg>
      )}
    </Button>
  );
};
