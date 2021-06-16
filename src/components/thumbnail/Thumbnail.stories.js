import React from 'react';
import Lightmap from '../../assets/lightmap.png';
import { Thumbnail } from './Thumbnail';

export default {
  title: 'Example/Thumbnail',
  component: Thumbnail,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Thumbnail {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  className: 'p-3',
  src: Lightmap,
};


