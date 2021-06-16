import React from 'react';

import { TextField } from './TextField';

export default {
  title: 'Form/TextField',
  component: TextField,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <TextField {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  className: '',
  
};

export const Labeled = Template.bind({});
Labeled.args = {
  className: 'p-3',
  label: "Name",
};


