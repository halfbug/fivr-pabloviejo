import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({ label, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className="avatar"
      {...props}
    >
      {label}
    </button>
  );
};

Avatar.propTypes = {
  /**
   * Is this the principal call to action on the page?
 
   */
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  onClick: undefined,
};
