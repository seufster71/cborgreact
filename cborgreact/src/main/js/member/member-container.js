/*
* Author Edward Seufert
*/
'use strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
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
import PMDeployContainer from './pm_deploy/deploy-container';
import PMDeployPipelineContainer from './pm_deploy/deploy-pipeline-container';
import PMDeploySystemContainer from './pm_deploy/deploy-system-container';
import NotesContainer from './notes/notes-container';
import GroupsContainer from './groups/groups-container';
import SubMenuContainer from './submenu/submenu-container';
import ShoppingContainer from './shopping/shopping-container';
import ProfileContainer from './profile/profile-container';
import DashboardContainer from './dashboard/dashboard-container';
import LogoutContainer from './logout/logout-container';
import MemberView from '../memberView/member-view';
import fuLogger from '../core/common/fu-logger';
import {PrivateRoute} from '../core/common/router-utils-web';

export default function MemberContainer({location,navigate}) {
	const session = useSelector((state) => state.session);
	const appMenus = useSelector((state) => state.appMenus);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	
  	
	useEffect(() => {
    	dispatch(memberActions.init({lang:session.selected.lang}));
  	}, []);

  	const changeTab = (code,index) => {
      navigate(index);
  	}

    fuLogger.log({level:'TRACE',loc:'MemberContainer::render',msg:"path "+ location.pathname});

    let myMenus = [];
    if (appMenus != null && appMenus[appPrefs.memberMenu] != null) {
      myMenus = appMenus[appPrefs.memberMenu];
    }
    let profileMenu = [];
    if (appMenus != null && appMenus.MEMBER_PROFILE_MENU_TOP != null) {
    	profileMenu = appMenus.MEMBER_PROFILE_MENU_TOP;
    }
    let myPermissions = {};
    if (session != null && session.selected != null && session.selected.permissions != null) {
      myPermissions = session.selected.permissions;
    }
    if (myMenus.length > 0) {
      return (
        <MemberView>
          <NavigationView appPrefs={appPrefs} permissions={myPermissions}
          menus={myMenus} changeTab={changeTab} activeTab={location.pathname} user={session.selected} profileMenu={profileMenu}/>
          <StatusView/>
          <Routes>
            <Route index element={<DashboardContainer location={location} navigate={navigate}/>} />
            <Route element={<PrivateRoute permissions={myPermissions} code="MA" pathto="/access-denied" />} >
				<Route path="/acquaintances/*" element={<AcquaintancesContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-team/*" element={<PMTeamContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-member/*" element={<PMMemberContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-role/*" element={<PMRoleContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-permission/*" element={<PMPermissionContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMPROD" pathto="/access-denied"/>} >
				<Route path="/pm-product/*" element={<PMProductContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMPROJ" pathto="/access-denied"/>} >
				<Route path="/pm-project/*" element={<PMProjectContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMREL" pathto="/access-denied"/>} >
				<Route path="/pm-release/*" element={<PMReleaseContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMBAK" pathto="/access-denied"/>} >
				<Route path="/pm-backlog/*" element={<PMBacklogContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMSCR" pathto="/access-denied"/>} >
				<Route path="/pm-scrum/*" element={<PMScrumContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-defect/*" element={<PMDefectContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMENH" pathto="/access-denied"/>} >
				<Route path="/pm-enhancement/*" element={<PMEnhancementContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTASK" pathto="/access-denied"/>} >
				<Route path="/pm-task/*" element={<PMTaskContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMWF" pathto="/access-denied"/>} >
				<Route path="/pm-workflow/*" element={<PMWorkflowContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMWFS" pathto="/access-denied"/>} >
				<Route path="/pm-workflowstep/*" element={<PMWorkflowStepContainer location={location} navigate={navigate}/>} />
			</Route>
			<Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-deploy/*" element={<PMDeployContainer location={location} navigate={navigate}/>} />
			</Route>
			<Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-deploy/pm-deploypipeline/*" element={<PMDeployPipelineContainer location={location} navigate={navigate}/>} />
			</Route>
			<Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-deploy/pm-deploysystem/*" element={<PMDeploySystemContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MG" pathto="/access-denied"/>} >
				<Route path="/groups/*" element={<GroupsContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MN" pathto="/access-denied"/>} >
				<Route path="/notes/*" element={<NotesContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MSM" pathto="/access-denied"/>} >
				<Route path="/member-submenu/*" element={<SubMenuContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MS" pathto="/access-denied"/>} >
				<Route path="/shopping/*" element={<ShoppingContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MP" minRights="W" pathto="/access-denied"/>} >
				<Route path="/profile/*" element={<ProfileContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="ML" pathto="/access-denied"/>} >
				<Route path="/logout/*" element={<LogoutContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route path="/admin" render={() => (
              <Redirect to="/admin"/>
            )}/>
          </Routes>
        </MemberView>
      );
    } else {
      	return (
        	<MemberView> <LoadingView/>
        	</MemberView>
      	);
    }
}

