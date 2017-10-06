import React from 'react';

export default function NavbarMenu(props) {

  let menuItems = [];
  var menuRight = props.menus.PUBLIC_MENU_RIGHT;
	for (var i in menuRight){
      const href = menuRight[i].values[0].href;
			const innerHTML = menuRight[i].values[0].value;
      let children = "";
      if (menuRight[i].children != null) {
          menuItems.push(<ul className='sub'></ul>);
          children = addSubMenu(menuRight[i].children);
      }
      menuItems.push(<li key={i}><a className='page-scroll' href={href}>{innerHTML}</a>{children}</li>);

	}

  return (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {menuItems}
          </ul>
      </div>
  );
}

function addSubMenu(child){
}
