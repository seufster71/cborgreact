import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavigationContainer from "./core/navigation/navigation-container";
import LoginContainer from "./core/usermanagement/login-container";
import StatusView from "./coreWeb/status/StatusView";
import MemberContainer from "./member/MemberContainer";
import { bindActionCreators } from "redux";
import * as navActions from "./core/navigation/nav-actions";

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.navigationChange = this.navigationChange.bind(this);
  }

  navigationChange(event) {
    if (event.target.id == "LOGIN") {
      this.props.actions.navChange({ currentPage: "login" });
    }
  }

  render() {
    if (this.props.navigation.currentPage == "login") {
      return (
        <div>
          <NavigationContainer
            navClick={this.navigationChange}
            menuName="PUBLIC_MENU_RIGHT"
          />
          <StatusView />
          <LoginContainer />
        </div>
      );
    } else if (this.props.navigation.currentPage == "member") {
      return (
        <div>
          <NavigationContainer
            navClick={this.navigationChange}
            menuName="MEMBER_MENU_RIGHT"
          />
          <StatusView />
          <MemberContainer />
        </div>
      );
    } else {
      return (
        <div>
          <NavigationContainer
            navClick={this.navigationChange}
            menuName="PUBLIC_MENU_RIGHT"
          />
          <StatusView />
          <h1>Test Change X</h1>
        </div>
      );
    }
  }
}

PageContainer.propTypes = {
  appPrefs: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  menus: PropTypes.object,
  lang: PropTypes.string,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    menus: state.appMenus.menus,
    lang: state.lang,
    appPrefs: state.appPrefs,
    navigation: state.navigation
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(navActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
