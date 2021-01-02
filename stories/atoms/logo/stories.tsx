import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Logo, LogoProps } from '.';
import { theme } from '../../../styles/theme';

export default {
  title: 'atoms/Logo',
  cimponent: Logo,
};

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const DefaultLoggedOut = Template.bind({});
DefaultLoggedOut.args = {};

export const DarkDrawing = Template.bind({});
DarkDrawing.args = {
  drawingColor: theme.skBlack,
};

export const DarkLetters = Template.bind({});
DarkLetters.args = {
  letterColor: theme.skBlack,
};
