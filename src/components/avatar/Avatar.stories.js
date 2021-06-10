import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Avatar {...args} />;

export const Label = Template.bind({});
Label.args = {
  primary: true,
  label: 'P',
};


