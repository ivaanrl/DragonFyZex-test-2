import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { LoggedOut, LoggedOutProps } from '.';

export default {
  title: 'molecules/Header logged out',
  cimponent: LoggedOut,
};

const Template: Story<LoggedOutProps> = (args) => <LoggedOut {...args} />;

export const DefaultLoggedOut = Template.bind({});
DefaultLoggedOut.args = {};
