import { FC, ReactNode } from 'react';
import { theme } from '../../../styles/theme';
import { Button } from '../../atoms';
import { Svg } from './styles';

export interface FooterButtonInterface {
  children: ReactNode;
}

export const FooterButton: FC<FooterButtonInterface> = ({ children }) => {
  return (
    <Button
      fontWeight={600}
      borderRadius={'4px'}
      backgroundColor={theme.colors.transparent}
      border={'1px solid'}
      borderColor={theme.colors.lightGreyTransparent}
      hoverBorderColor={theme.colors.lightGrey}
      paddingY={20}
      paddingLeft={20}
      paddingRight={20}
      fontSize={13}
      color={theme.colors.lightGrey}
      position={'relative'}
      maxWidth={330}
    >
      {children}
      <Svg
        style={{ rotate: 90 }}
        width="11"
        height="8"
        viewBox="0 0 11 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={theme.colors.lightGrey}
          d="M10.9133 5.65273L9.51328 7.05273L5.51328 3.05273L1.51328 7.05273L0.113281 5.65273L5.51328 0.252735L10.9133 5.65273Z"
        />
      </Svg>
    </Button>
  );
};
