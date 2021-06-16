import React from 'react';
import PropTypes from 'prop-types';
import './textField.css';

/**
 * Primary UI component for user interaction
 */
export const TextField = ({ className, label, labelClass, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  if (label)
  return(<div className="flex flex-row align-middle">
    <label className={`label mr-2 ${labelClass}`} >{label}</label>
    <input
    type= 'text'
      className={`textfield ${className}`}
      {...props}
      
    />
  </div>)
  else 
  return (
    <input
    type= 'text'
      className={`textfield ${className}`}
      {...props}
     />
   );
};

TextField.propTypes = {
  /**
   * Is this the principal call to action on the page?
 
   */
  onClick: PropTypes.func,
};

TextField.defaultProps = {
  onClick: undefined,
};
