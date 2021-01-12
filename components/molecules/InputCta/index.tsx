import { FC } from 'react';
import { theme } from '../../../styles/theme';
import { Input, Button } from '../../atoms';
import { Wrapper } from './styles';

export interface InputCtaProps {
  placeholder: string;
  cta: string;
}

export const InputCTA: FC<InputCtaProps> = ({ placeholder, cta }) => {
  return (
    <Wrapper>
      <Input
        placeholder={placeholder}
        paddingLeft={20}
        height={'100%'}
        width={'100%'}
        fontSize={18}
        border="none"
        borderRadius={9999}
      />
      <Button
        backgroundColor={theme.colors.skGreen}
        color={theme.colors.white}
        borderRadius={9999}
        height={'3rem'}
        paddingLeft={34}
        paddingRight={34}
        fontSize={18}
        fontWeight={600}
        hoverBackgroundColor={theme.colors.skBlack}
      >
        {cta}
      </Button>
    </Wrapper>
  );
};
