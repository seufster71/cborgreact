import React from 'react';
import { render } from 'react-dom';
import NavigationContainer from './core/navigation/NavigationContainer.js';
import LoginContainer from './core/usermanagement/LoginContainer.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Theme from './theme.css';

class App extends React.Component {

  constructor() {
	    super();
	    this.state = {
	      headerName: 'CBorgTech',
        menuName: 'home'
	    };
	}

  navigationChange() {

  }

  render() {

    return (
      <div className="container-fluid">
        {this.state.menuName == 'home' ? (
          <div><NavigationContainer headerName={this.state.headerName}/> Main page</div>
        ) : (
          <div><NavigationContainer headerName={this.state.headerName}/><LoginContainer/></div>
          )}
		  </div>
    );
  }
}

render( <App/>, document.getElementById('app') );
