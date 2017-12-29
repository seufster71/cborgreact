import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import NavigationContainer from './core/navigation/NavigationContainer.js';
import LoginContainer from './core/usermanagement/LoginContainer.js';


class PageContainer extends Component {
	constructor(props) {
		super(props);
    this.state = {
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
    console.log("PageContainer " + this.state.menuName);
    return (
      <div >
        {this.state.menuName == 'home' ? (
          <div><NavigationContainer navClick={this.navigationChange} menuName="PUBLIC_MENU_RIGHT"/> Main page</div>
        ) : (
          <div><NavigationContainer navClick={this.navigationChange} menuName="PUBLIC_MENU_RIGHT"/><LoginContainer/></div>
          )}
      </div>
    );
  }
}

PageContainer.propTypes = {
	appPrefs: PropTypes.object.isRequired,
	menus: PropTypes.object,
	lang: PropTypes.string,
	appGlobal: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	console.log(state);
  return {menus:state.appMenus.menus, lang:state.lang, appPrefs:state.appPrefs, appGlobal:state.appPrefs.appGlobal};
}

export default connect(mapStateToProps)(PageContainer);
