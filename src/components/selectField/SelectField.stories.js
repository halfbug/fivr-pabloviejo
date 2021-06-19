import React from 'react';

import { SelectField } from './SelectField';

export default {
  title: 'Form/SelectField',
  component: SelectField,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <SelectField {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  className: '',
  options: [
    {value : 'UK', label: 'United kingdom' },
    {value : 'Afghanistan', label: 'Afghanistan' },
    {value : 'USA', label: 'United States' },
    ],
    selectedValue: 'UK',
};

export const Labeled = Template.bind({});
Labeled.args = {
  className: 'p-3',
  label: "Region",
  options: [
    {value : 'UK', label: 'United kingdom' },
    {value : 'Afghanistan', label: 'Afghanistan' },
    {value : 'USA', label: 'United States' },
    ],
    selectedValue: 'USA',
};


