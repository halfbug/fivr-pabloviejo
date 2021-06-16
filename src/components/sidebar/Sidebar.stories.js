import React from 'react';
import {
  BrowserRouter as Router,
  } from "react-router-dom";
import { Sidebar } from './SideBar';
import {menu} from '../../sidemenu';

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    menu: { control: 'object' },
  },
};

const Template = (args) => <Router><Sidebar {...args} /></Router>;

export const Main = Template.bind({});
Main.args = {
  menu : [{
    route : '/home',
    icon: 'location_on',
    variant: ''
  },
  {
    route : '/home',
    icon: 'search',
    variant: ''
  },
  {
    route : '/home',
    icon: 'edit',
    variant: ''
  },
  {
    route : '/home',
    icon: 'manage_accounts',
    variant: '-outlined'
  },
  
]
  
};


