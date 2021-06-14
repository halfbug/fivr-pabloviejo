import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Sidebar from '../sidebar';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount, children, menu }) => (
  <article>
   
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
    <Sidebar menu={menu} />
    <section className="mt-24 ml-20">
     {children}
    </section>
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  children: PropTypes.element,
};

Page.defaultProps = {
  user: null,
  children: <p>display text</p>
};
