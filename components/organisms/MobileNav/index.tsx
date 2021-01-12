import { FC } from 'react';
import { theme } from '../../../styles/theme';
import { Button, Link } from '../../atoms';
import { Accordion, MenuSection } from '../../molecules';
import { Wrapper } from './styles';

export interface MobileNavProps {}

export const MobileNav: FC<MobileNavProps> = () => {
  return (
    <Wrapper>
      <Accordion label="Products">
        <MenuSection
          title="CONVENIENCE RETAILS"
          items={[
            {
              title: 'For C-Stores',
            },
            {
              title: 'Scan Data',
              subtitle: 'Earn more from brands and customers.',
            },
            {
              title: 'Engage',
              subtitle: 'Unlock exclusive brand promotions.',
            },
            {
              title: 'Pricing',
            },
          ]}
        />
        <MenuSection
          title="ENTERPRISE BRANDS"
          items={[
            {
              title: 'For Brands',
            },
            {
              title: 'Insights',
              subtitle: 'Earn more from brands and customers.',
            },
            {
              title: 'Engage',
              subtitle: 'Rein in your customer understanding.',
            },
            {
              title: 'Engage for Brands',
              subtitle: 'Direct strategic promos across c-stores.',
            },
          ]}
        />
      </Accordion>
      <Link
        fontSize={24}
        fontWeight={600}
        href={'#'}
        marginBottom={20}
        marginTop={20}
      >
        Resources
      </Link>
      <Link fontSize={24} fontWeight={600} href={'#'}>
        Help Center
      </Link>
      <Button
        width={'100%'}
        backgroundColor={theme.colors.skGreen}
        color={theme.colors.lightGrey}
        borderRadius={9999}
        height={'3rem'}
        fontWeight={600}
        fontSize={16}
        marginTop={20}
        marginBottom={20}
      >
        Get started
      </Button>
      <Button
        width={'100%'}
        backgroundColor={theme.colors.lightGrey}
        color={theme.colors.skBlack}
        border={'1px solid'}
        borderColor={theme.colors.borderGrey}
        borderRadius={9999}
        height={'3rem'}
        fontWeight={600}
        fontSize={16}
      >
        Log in
      </Button>
    </Wrapper>
  );
};
