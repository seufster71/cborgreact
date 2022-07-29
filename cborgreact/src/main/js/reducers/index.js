import {combineReducers} from 'redux';
import appPrefs from '../core/common/apppref-reducer';
import userPrefs from'../core/common/userpref-reducer';
import appMenus from '../core/common/appmenu-reducer';
import status from '../core/status/status-reducer';

import member from '../member/member-reducer';
import session from '../member/session/session-reducer';
import acquaintances from '../member/social/acquaintances/acquaintances-reducer';
import memberdashboard from '../member/dashboard/dashboard-reducer';

import adminstatus from '../admin/status/status-reducer';
import adminusers from '../admin/users/users-reducer';
import adminlanguage from '../admin/language/language-reducer';
import adminroles from '../admin/roles/roles-reducer';
import adminpermissions from '../admin/permissions/permissions-reducer';
import adminmenus from '../admin/menu/menus-reducer';
import adminpreferences from '../admin/preferences/preferences-reducer';
import adminpreferenceSub from '../admin/preferences/preferences-sub-reducer';
import admincategory from '../admin/category/category-reducer';
import adminservice from '../admin/service/service-reducer';
import admindashboard from '../admin/dashboard/dashboard-reducer';
import adminbugs from '../admin/bugs/bugs-reducer';

import systemclientdomain from '../system/clientdomain/clientdomain-reducer';
import systemapplication from '../system/application/application-reducer';
import systemservice from '../system/service/service-reducer';

import pmteam from '../member/pm/team/team-reducer';
import pmmember from '../member/pm/team/member-reducer';
import pmrole from '../member/pm/team/role-reducer';
import pmpermission from '../member/pm/team/permission-reducer';
import pmproduct from '../member/pm/product/product-reducer';
import pmproject from '../member/pm/project/project-reducer';
import pmrelease from '../member/pm/release/release-reducer';
import pmbacklog from '../member/pm/backlog/backlog-reducer';
import pmdefect from '../member/pm/defect/defect-reducer';
import pmenhancement from '../member/pm/enhancement/enhancement-reducer';
import pmscrum from '../member/pm/scrum/scrum-reducer';
import pmsprint from '../member/pm/sprint/sprint-reducer';
import pmtask from '../member/pm/task/task-reducer';
import pmtestcase from '../member/pm/testcase/testcase-reducer';
import pmtestscenario from '../member/pm/testscenario/testscenario-reducer';
import pmworkflow from '../member/pm/workflow/workflow-reducer';
import pmworkflowstep from '../member/pm/workflow/workflowstep-reducer';
import pmdeploy from '../member/pm/deploy/deploy-reducer';
import pmdeploypipeline from '../member/pm/deploy/deploy-pipeline-reducer';
import pmdeploysystem from '../member/pm/deploy/deploy-system-reducer';

const rootReducer = combineReducers({appPrefs,appMenus,session,member,status,adminstatus,memberdashboard,
  adminusers,adminlanguage,adminroles,adminpermissions,adminmenus,adminpreferences,adminpreferenceSub,admincategory,adminservice,adminbugs,systemclientdomain,systemapplication,systemservice,
acquaintances,admindashboard,userPrefs,pmteam,pmmember,pmrole,pmpermission,pmproduct,pmproject,pmrelease,pmbacklog,pmdefect,pmenhancement,pmscrum,pmsprint,pmtask,
pmtestcase,pmtestscenario,pmworkflow,pmworkflowstep,pmdeploy,pmdeploypipeline,pmdeploysystem});

export default rootReducer;
