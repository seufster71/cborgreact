import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter} from "react-router-dom";
import NavigationContainer from "./core/navigation/navigation-container";
import LoginContainer from "./core/usermanagement/login-container";
import StatusView from "./coreView/status/status-view";
import MemberContainer from "./member/member-container";
import PublicContainer from "./public/public-container";
import AdminContainer from "./admin/admin-container";
import { bindActionCreators } from "redux";
import * as navActions from "./core/navigation/nav-actions";
import fuLogger from './core/common/fu-logger';

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
    fuLogger.log({level:'TRACE',loc:'PageContainer::render',msg:"page"});
    if (this.props.session.sessionActive == true) {
     return (
      <Switch>
        <Route exact path="/" component={MemberContainer}/>
        <Route path="/member" component={MemberContainer}/>
        <Route path="/admin" component={AdminContainer} />
      </Switch>

      );
    } else {
      return (
        <div>
          <NavigationContainer
            navClick={this.navigationChange}
            menuName="PUBLIC_MENU_RIGHT"
          />
          <StatusView />
          <Switch>
            <Route exact path="/" component={PublicContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/about" component={PublicContainer}/>
          </Switch>
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
  actions: PropTypes.object,
  session: PropTypes.object,
  history: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    menus: state.appMenus.menus,
    lang: state.lang,
    appPrefs: state.appPrefs,
    navigation: state.navigation,
    session:state.session
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(navActions, dispatch) };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageContainer));
