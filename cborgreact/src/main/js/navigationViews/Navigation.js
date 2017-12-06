import React from 'react';
import PropTypes from 'prop-types';
import NavbarHeader from './NavbarHeader.js';
import NavbarMenu from './NavbarMenu.js';

export default function Navigation(props) {

  return (
    <nav id="mainNav" className="navbar navbar-Public navbar-custom navbar-fixed-top affix">
     <div className="container">
       <NavbarHeader headerName={props.headerName}/>
       <NavbarMenu menus={props.menus} navClick={props.navClick}/>
     </div>
    </nav>

  );
}

Navigation.propTypes = {
	headerName: PropTypes.string.isRequired,
	menus: PropTypes.object.isRequired,
	navClick: PropTypes.func.isRequired
};
