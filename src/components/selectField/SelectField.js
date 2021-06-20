import React from 'react';
import PropTypes from 'prop-types';
import './selectField.css';

/**
 * Primary UI component for user interaction
 */
export const SelectField = ({ className, label, labelClass, options, selectedValue, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  if (label)
  return(<div className="flex flex-row align-middle">
    <label className={`label mr-2 ${labelClass}`} >{label}</label>
    <select id="cars" className={`dropbtn ${className}`} value={selectedValue} {...props}>
      {options.map(({value, label})=><option value={value}>{label}</option>)}
    </select>
  </div>)
  else 
  return (
    <select id="cars" className={`dropbtn ${className}`} value={selectedValue} {...props}>
      {options.map(({value, label})=><option value={value}>{label}</option>)}
    </select>
   );
};

SelectField.propTypes = {
  /**
   * Is this the principal call to action on the page?
 
   */
  options: PropTypes.array,
  onClick: PropTypes.func,
};

SelectField.defaultProps = {
  onClick: undefined,
  options:[],
};
