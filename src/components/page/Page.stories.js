import React from 'react';

import { Page } from './Page';
import * as HeaderStories from '../header/Header.stories';
import * as SidebarStories from '../sidebar/Sidebar.stories';
import {
  BrowserRouter as Router,
  } from "react-router-dom";

export default {
  title: 'Layout/Page',
  component: Page,
  argTypes: {
    children: { 
      control: { type: 'text' },
    },
  },
};

const Template = (args) =><Router> <Page {...args} >{args.children}</Page> </Router>;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
  ...SidebarStories.Main.args,
  children : <h1>H1 test here</h1>
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
  ...SidebarStories.Main.args,
  children: <h1>welcome</h1>
};
