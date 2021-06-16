import React from 'react';
import PropTypes from 'prop-types';
import './thumbnail.css';

/**
 * Primary UI component for user interaction
 */
export const Thumbnail = ({ className, ...props }) => {
 
  return (
    <img
      className={`thumbnail ${className}`}
      {...props}
    />
      
  );
};

Thumbnail.propTypes = {
  /**
   * Is this the principal call to action on the page?
 
   */
  onClick: PropTypes.func,
};

Thumbnail.defaultProps = {
  src: undefined,
};
