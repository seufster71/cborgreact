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
      this.navigationChange = this.navigationChange.bind(this);
	}

  navigationChange(params) {
    console.log("nav change");
    this.setState({menuName : 'login'});
  }

  render() {
    console.log("state name " + this.state.menuName);
    return (
      <div className="container-fluid">
        {this.state.menuName == 'home' ? (
          <div><NavigationContainer headerName={this.state.headerName} navChange={this.navigationChange}/> Main page</div>
        ) : (
          <div><NavigationContainer headerName={this.state.headerName} navChange={this.navigationChange}/><LoginContainer/></div>
          )}
		  </div>
    );
  }
}

render( <App/>, document.getElementById('app') );
