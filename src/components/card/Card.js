import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ className, media, detail, ...props }) => {
 
  return (
           <div className={`card ${className}`} {...props}>
                        
                      {media}
                      {detail}
           </div>
      
  );
};

Card.propTypes = {
  /**
   * Is this the principal call to action on the page?
 
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  src: undefined,
};
