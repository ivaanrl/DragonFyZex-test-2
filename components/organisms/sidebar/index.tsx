import { FC } from 'react';
import { Link } from '../../atoms';
import { BottomWrapper, TopWrapper, Wrapper } from './styles';
import { MenuSection } from '../../molecules';
import { theme } from '../../../styles/theme';

export interface SidebarProps {
  onMouseLeave: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ onMouseLeave }) => {
  return (
    <Wrapper onMouseLeave={onMouseLeave}>
      <TopWrapper>
        <Link fontSize={16} fontWeight={600} hoverColor={theme.colors.skGreen}>
          Products
        </Link>
        <Link fontSize={16} fontWeight={600} hoverColor={theme.colors.skGreen}>
          Resources
        </Link>
        <Link fontSize={16} fontWeight={600} hoverColor={theme.colors.skGreen}>
          Help Center
        </Link>
      </TopWrapper>
      <BottomWrapper>
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
      </BottomWrapper>
    </Wrapper>
  );
};
