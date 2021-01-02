import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Title, TitleProps } from '.';
import { theme } from '../../../styles/theme';

export default {
  title: 'atoms/Title',
  component: Title,
};

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const ExtraLargeTitle = Template.bind({});
ExtraLargeTitle.args = {
  fontSize: 'large',
  children: 'This is an Extra-Large Title',
};

export const TitleWithHighlight = () => (
  <Title>
    This is a <span>highlighted</span> text.
  </Title>
);

export const CustomHighlightColor = () => (
  <Title highlightColor={'#ff4800'}>
    Custom <span>highlight</span> color.
  </Title>
);

export const ExtraLargeWhiteTitle = Template.bind({});
ExtraLargeWhiteTitle.args = {
  fontSize: 'large',
  mainColor: theme.lightGrey,
  children: 'This is an Extra-Large Title',
};

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  fontSize: 'large',
  children: 'This is a large title',
};

export const MediumTitle = Template.bind({});
MediumTitle.args = {
  fontSize: 'medium',
  children: 'This is a medium title',
};

export const SmallBoldTitle = Template.bind({});
SmallBoldTitle.args = {
  fontSize: 'small',
  customFontWeight: 'bold',
  children: 'small bold title',
};

export const ExtraSmallBoldTitle = Template.bind({});
ExtraSmallBoldTitle.args = {
  fontSize: 'extra-small',
  customFontWeight: 'bold',
  children: 'extra small bold title',
};

export const CustomFontSizeAndColor = Template.bind({});
CustomFontSizeAndColor.args = {
  fontSize: 'extra-small',
  customFontSize: 14,
  mainColor: theme.skGreen,
  children: 'custom font size and color',
};
