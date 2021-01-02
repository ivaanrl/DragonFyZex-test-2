import React from 'react';
import { theme } from '../../../styles/theme';
import { Button } from '../../atoms/button';
import { IconPath, IconSvg } from './styles';

export interface FooterButtonProps {
  label: string;
}

export const FooterButton: React.FC<FooterButtonProps> = ({ label }) => {
  return (
    <Button
      hasIcon
      transparent
      square
      size="large"
      borderColor={theme.lightGreyTransparent}
      borederHoverColor={theme.lightGrey}
      styles={{
        color: theme.lightGrey,
        maxWidth: '330px',
        paddingTop: '20px',
        paddingBottom: '20px',
        height: 'auto',
        fontSize: '13px',
      }}
    >
      {label}
      <IconSvg
        style={{ rotate: 90 }}
        width="11"
        height="8"
        viewBox="0 0 11 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <IconPath
          fillColor={theme.lightGrey}
          d="M10.9133 5.65273L9.51328 7.05273L5.51328 3.05273L1.51328 7.05273L0.113281 5.65273L5.51328 0.252735L10.9133 5.65273Z"
        />
      </IconSvg>
    </Button>
  );
};
