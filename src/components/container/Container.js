import React from 'react';
import PropTypes from 'prop-types';
import './container.css';

/**
 * Primary UI component for user interaction
 */
export const Container = ({ children, className, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div
      className={`container ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  /**
   * Is this the principal call to action on the page?
 
   */
  onClick: PropTypes.func,
};

Container.defaultProps = {
  onClick: undefined,
};
