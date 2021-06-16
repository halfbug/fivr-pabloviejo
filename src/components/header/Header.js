import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../assets/logo.svg';
//'../assets/logo.svg';
import {Avatar} from '../avatar/Avatar';
import Button from '../button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className="z-50">
    <div className="wrapper">
      <div>
     <Logo />

        
      </div>
      <div>
        {user ? (
         <Avatar label="P" />
         // <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  // onLogin: PropTypes.func.isRequired,
  // onLogout: PropTypes.func.isRequired,
  // onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
