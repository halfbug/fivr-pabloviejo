import React from 'react';

import { Container } from './Container';

export default {
  title: 'Example/Container',
  component: Container,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Container {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  className: 'p-3',
  children: <p>name : here</p>,
};


