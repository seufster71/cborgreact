/*
* Author Edward Seufert
*/
'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Switch, Route, withRouter, Redirect} from "react-router";
import * as memberActions from './member-actions';
import LoginContainer from '../core/usermgnt/login-container';
import StatusView from '../coreView/status/status-view';
import LoadingView from '../coreView/status/loading-view';
import NavigationView from '../coreView/navigation/navigation-view';
import EventsContainer from './events/events-container';
import AcquaintancesContainer from './acquaintances/acquaintances-container';
import PMTeamContainer from './pm_team/team-container';
import PMMemberContainer from './pm_team/member-container';
import PMRoleContainer from './pm_team/role-container';
import PMPermissionContainer from './pm_team/permission-container';
import PMProductContainer from './pm_product/product-container';
import PMProjectContainer from './pm_project/project-container';
import PMReleaseContainer from './pm_release/release-container';
import PMBacklogContainer from './pm_backlog/backlog-container';
import PMScrumContainer from './pm_scrum/scrum-container';
import PMDefectContainer from './pm_defect/defect-container';
import PMEnhancementContainer from './pm_enhancement/enhancement-container';
import PMTaskContainer from './pm_task/task-container';
import PMWorkflowContainer from './pm_workflow/workflow-container';
import PMWorkflowStepContainer from './pm_workflow/workflowstep-container';
import NotesContainer from './notes/notes-container';
import GroupsContainer from './groups/groups-container';
import SubMenuContainer from './submenu/submenu-container';
import ShoppingContainer from './shopping/shopping-container';
import ProfileContainer from './profile/profile-container';
import DashboardContainer from './dashboard/dashboard-container';
import LogoutContainer from './logout/logout-container';
import MemberView from '../memberView/member-view';
import fuLogger from '../core/common/fu-logger';
import {PrivateRoute} from '../core/common/utils';

class MemberContainer extends Component {
  constructor(props) {
		super(props);

    this.changeTab = this.changeTab.bind(this);
	}

  componentDidMount() {
    this.props.actions.init({lang:this.props.session.selected.lang});
  }

  changeTab(code,index) {
      this.props.history.replace(index);
  }

  render() {
    fuLogger.log({level:'TRACE',loc:'MemberContainer::render',msg:"path "+ this.props.history.location.pathname});

    let myMenus = [];
    if (this.props.appMenus != null && this.props.appMenus[this.props.appPrefs.memberMenu] != null) {
      myMenus = this.props.appMenus[this.props.appPrefs.memberMenu];
    }
    let profileMenu = [];
    if (this.props.appMenus != null && this.props.appMenus.MEMBER_PROFILE_MENU_TOP != null) {
    	profileMenu = this.props.appMenus.MEMBER_PROFILE_MENU_TOP;
    }
    let myPermissions = {};
    if (this.props.session != null && this.props.session.selected != null && this.props.session.selected.permissions != null) {
      myPermissions = this.props.session.selected.permissions;
    }
    if (myMenus.length > 0) {
      return (
        <MemberView>
          <NavigationView appPrefs={this.props.appPrefs} permissions={myPermissions}
          menus={myMenus} changeTab={this.changeTab} activeTab={this.props.history.location.pathname} user={this.props.session.selected} profileMenu={profileMenu}/>
          <StatusView/>
          <Switch>
            <Route exact path="/" component={DashboardContainer} />
            <Route exact path="/member" component={DashboardContainer} />
            <PrivateRoute path="/member-acquaintances" component={AcquaintancesContainer} permissions={myPermissions} code="MA" pathto="/access-denied"/>
            <PrivateRoute path="/pm-team" component={PMTeamContainer} permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>
            <PrivateRoute path="/pm-member" component={PMMemberContainer} permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>
            <PrivateRoute path="/pm-role" component={PMRoleContainer} permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>
            <PrivateRoute path="/pm-permission" component={PMPermissionContainer} permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>
            <PrivateRoute path="/pm-product" component={PMProductContainer} permissions={myPermissions} code="MPMPROD" pathto="/access-denied"/>
            <PrivateRoute path="/pm-project" component={PMProjectContainer} permissions={myPermissions} code="MPMPROJ" pathto="/access-denied"/>
            <PrivateRoute path="/pm-release" component={PMReleaseContainer} permissions={myPermissions} code="MPMREL" pathto="/access-denied"/>
            <PrivateRoute path="/pm-backlog" component={PMBacklogContainer} permissions={myPermissions} code="MPMBAK" pathto="/access-denied"/>
            <PrivateRoute path="/pm-scrum" component={PMScrumContainer} permissions={myPermissions} code="MPMSCR" pathto="/access-denied"/>
            <PrivateRoute path="/pm-defect" component={PMDefectContainer} permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>
            <PrivateRoute path="/pm-enhancement" component={PMEnhancementContainer} permissions={myPermissions} code="MPMENH" pathto="/access-denied"/>
            <PrivateRoute path="/pm-task" component={PMTaskContainer} permissions={myPermissions} code="MPMTASK" pathto="/access-denied"/>
            <PrivateRoute path="/pm-workflow" component={PMWorkflowContainer} permissions={myPermissions} code="MPMWF" pathto="/access-denied"/>
            <PrivateRoute path="/pm-workflowstep" component={PMWorkflowStepContainer} permissions={myPermissions} code="MPMWFS" pathto="/access-denied"/>
            <PrivateRoute path="/member-groups" component={GroupsContainer} permissions={myPermissions} code="MG" pathto="/access-denied"/>
            <PrivateRoute path="/member-notes" component={NotesContainer} permissions={myPermissions} code="MN" pathto="/access-denied"/>
            <PrivateRoute path="/member-submenu" component={SubMenuContainer} permissions={myPermissions} code="MSM" pathto="/access-denied"/>
            <PrivateRoute path="/member-shopping" component={ShoppingContainer} permissions={myPermissions} code="MS" pathto="/access-denied"/>
            <PrivateRoute path="/member-profile" component={ProfileContainer} permissions={myPermissions} code="MP" minRights="W" pathto="/access-denied"/>
            <PrivateRoute path="/member-logout" component={LogoutContainer} permissions={myPermissions} code="ML" pathto="/access-denied"/>
            <Route path="/admin" render={() => (
              <Redirect to="/admin"/>
            )}/>
          </Switch>
        </MemberView>
      );
    } else {
      return (
        <MemberView> <LoadingView/>
        </MemberView>
      );
    }
  }
}

MemberContainer.propTypes = {
	appPrefs: PropTypes.object.isRequired,
	appMenus: PropTypes.object,
  session: PropTypes.object,
  member: PropTypes.object,
	actions: PropTypes.object,
  history: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {appPrefs:state.appPrefs, appMenus:state.appMenus, session:state.session, member:state.member};
}

function mapDispatchToProps(dispatch) {
  return { actions:bindActionCreators(memberActions,dispatch) };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MemberContainer));
