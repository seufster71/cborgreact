import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter} from "react-router-dom";
import NavigationContainer from "./coreView/navigation/navigation-view";
import LoginContainer from "./core/usermanagement/login-container";
import StatusView from "./coreView/status/status-view";
import MemberContainer from "./member/member-container";
import PublicContainer from "./public/public-container";
import AdminContainer from "./admin/admin-container";
import { bindActionCreators } from "redux";
//import * as navActions from "./core/navigation/nav-actions";
import fuLogger from './core/common/fu-logger';

class PageContainer extends Component {
  constructor(props) {
    super(props);
    //this.navigationChange = this.navigationChange.bind(this);
  }

//  navigationChange(event) {
//    if (event.target.id == "LOGIN") {
//      this.props.actions.navChange({ currentPage: "login" });
//    }
//  }

  render() {
    fuLogger.log({level:'TRACE',loc:'PageContainer::render',msg:"page"});
    if (this.props.session.sessionActive == true) {
     return (
      <Switch>
        <Route exact path="/" component={MemberContainer}/>
        <Route path="/member" component={MemberContainer}/>
        <Route path="/member-acquaintances" component={MemberContainer}/>
        <Route path="/member-groups" component={MemberContainer}/>
        <Route path="/member-notes" component={MemberContainer}/>
        <Route path="/member-shopping" component={MemberContainer}/>
        <Route path="/member-profile" component={MemberContainer}/>
        <Route path="/member-logout" component={MemberContainer}/>
        <Route path="/admin" component={AdminContainer}/>
        <Route path="/admin-bugs" component={AdminContainer}/>
        <Route path="/admin-changerequests" component={AdminContainer}/>
        <Route path="/admin-users" component={AdminContainer}/>
        <Route path="/admin-roles" component={AdminContainer}/>
        <Route path="/admin-permissions" component={AdminContainer}/>
        <Route path="/admin-prefmgmt" component={AdminContainer}/>
        <Route path="/admin-prefpublic" component={AdminContainer}/>
        <Route path="/admin-prefmember" component={AdminContainer}/>
        <Route path="/admin-prefadmin" component={AdminContainer}/>
        <Route path="/admin-language" component={AdminContainer}/>
        <Route path="/admin-category" component={AdminContainer}/>
        <Route path="/admin-status" component={AdminContainer}/>
        <Route path="/admin-service" component={AdminContainer}/>
        <Route path="/admin-menu" component={AdminContainer}/>
        <Route path="/admin-system" component={AdminContainer}/>
        <Route path="/admin-other" component={AdminContainer}/>
        <Route path="/admin-usermgmt" component={AdminContainer}/>
      </Switch>

      );
    } else {
      return (
        <div>
          <NavigationContainer appPrefs={this.props.appPrefs}
          menus={this.props.appMenus.PUBLIC_MENU_RIGHT} />
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
  appMenus: PropTypes.object,
  lang: PropTypes.string,
  actions: PropTypes.object,
  session: PropTypes.object,
  history: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    appMenus: state.appMenus,
    lang: state.lang,
    appPrefs: state.appPrefs,
    navigation: state.navigation,
    session:state.session
  };
}

//function mapDispatchToProps(dispatch) {
//  return { actions: bindActionCreators(navActions, dispatch) };
//}

export default withRouter(connect(mapStateToProps)(PageContainer));
