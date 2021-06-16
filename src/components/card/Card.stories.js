import React from 'react';
import Lightmap from '../../assets/lightmap.png';
import { Card } from './Card';
import Button from '../button';
import Thumbnail from '../thumbnail';

export default {
  title: 'Example/Card',
  component: Card,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Card {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  media: <Thumbnail src={Lightmap} className="self-center" />,
  detail: <Button size="large" label="Digital" />,
};


export const Bordered = Template.bind({});
Bordered.args = {
  media: <Thumbnail src={Lightmap} className="self-center" />,
  detail: <span className="self-center mt-1">Digital</span>,
  className: 'border p-2 rounded'
};


