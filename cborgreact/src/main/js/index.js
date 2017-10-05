import React from 'react';
import ReactDom from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import AwesomeComponent from './AwesomeComponent.js';
import Theme from './theme.css';

class App extends React.Component {
  render() {
    return (
    	<nav id="mainNav" className="navbar navbar-Public navbar-custom navbar-fixed-top affix-top">
    		<div className="container">
    			<div className="navbar-header page-scroll">
    				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
    					<span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
    				</button>
    				<a className="navbar-brand page-scroll" href="#page-top">CBORGTECHxx</a>
    			</div>
    			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    				<ul className="nav navbar-nav navbar-right">
    					<li><a className="page-scroll" href="#services">Services</a></li>
    					<li><a className="page-scroll" href="#portfolio">Portfolio</a></li>
    					<li><a className="page-scroll" href="#about">About</a></li>
    					<li><a className="page-scroll" href="#team">Team</a></li>
    					<li><a className="page-scroll" href="/login/login.html">Login</a></li>
    				</ul>
    			</div>
    		</div>
    	</nav>
    );
  }
}

ReactDom.render( <App/>, document.getElementById('app') );
