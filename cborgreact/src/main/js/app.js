import React, {Component} from 'react';
import { render } from 'react-dom';
import NavigationContainer from './core/navigation/NavigationContainer.js';
import LoginContainer from './core/usermanagement/LoginContainer.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Theme from './theme.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      headerName: 'CBorgTech',
      menuName: 'home'
    };
      this.navigationChange = this.navigationChange.bind(this);
	}

  navigationChange(event) {
    console.log("nav change");
    if (event.target.id == 'LOGIN') {
      this.setState({menuName : 'login'});
    }
  }

  render() {
    console.log("state name " + this.state.menuName);
    return (
      <div >
        {this.state.menuName == 'home' ? (
          <div><NavigationContainer headerName={this.state.headerName} navClick={this.navigationChange}/> Main page</div>
        ) : (
          <div><NavigationContainer headerName={this.state.headerName} navClick={this.navigationChange}/><LoginContainer/></div>
          )}
      </div>
    );
  }
}

render( <App/>, document.getElementById('app') );
