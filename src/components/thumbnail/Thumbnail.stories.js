import React from 'react';
import Lightmap from '../../assets/lightmap.png';
import { Thumbnail } from './Thumbnail';

export default {
  title: 'Layout/Thumbnail',
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

export const Rounded = Template.bind({});
Rounded.args = {
  className: 'rounded-full',
  src: 'https://s3.ivisa.com/website-assets/blog/id-photo2.jpg',
};


