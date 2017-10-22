import React from 'react';
import { render } from 'react-dom';
import NavigationContainer from './core/navigation/NavigationContainer.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Theme from './theme.css';

class App extends React.Component {

  constructor() {
	    super();
	    this.state = {
	      headerName: 'CBorgTech',
        showMenu: true
	    };
	  }

  render() {

    return (
      <div className="container-fluid">
        {this.state.showMenu ? (<NavigationContainer headerName={this.state.headerName}/>) : (<div></div>)}
		  </div>
    );
  }
}

render( <App/>, document.getElementById('app') );
