import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import { Link } from "react-router-dom";

/**
 * Primary UI component for user interaction
 */
export const Sidebar = ({ menu, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const [open, setopen] = useState(false);
  return (
   <div className={`sidebar ${open && `extended`}`}>
   {open?
   <button className="closebutton" onClick={()=>setopen(false)}>
    <span className="material-icons-outlined">
close
</span>
    </button>
   :<button className="openbutton" onClick={()=>setopen(true)}>
    <span className="material-icons-outlined">
menu
</span>
    </button> }
    {menu.length > 1 && menu.map(({variant, icon, route, label='home' })=><Link to={route}>
      <i className={`material-icons${variant}`}>
        {icon}
        </i>
        {open && label}
        </Link>)}
        
  </div>
  );
};

Sidebar.propTypes = {
  /**
   * Is this the principal call to action on the page?
 
   */
  onClick: PropTypes.func,
};

Sidebar.defaultProps = {
  onClick: undefined,
};
