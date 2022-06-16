import {combineReducers} from 'redux';
import appPrefs from '../core/common/apppref-reducer';
import userPrefs from'../core/common/userpref-reducer';
import appMenus from '../core/common/appmenu-reducer';
import status from '../core/status/status-reducer';

import member from '../member/member-reducer';
import session from '../member/session/session-reducer';
import acquaintances from '../member/acquaintances/acquaintances-reducer';
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

import pmteam from '../member/pm_team/team-reducer';
import pmmember from '../member/pm_team/member-reducer';
import pmrole from '../member/pm_team/role-reducer';
import pmpermission from '../member/pm_team/permission-reducer';
import pmproduct from '../member/pm_product/product-reducer';
import pmproject from '../member/pm_project/project-reducer';
import pmrelease from '../member/pm_release/release-reducer';
import pmbacklog from '../member/pm_backlog/backlog-reducer';
import pmdefect from '../member/pm_defect/defect-reducer';
import pmenhancement from '../member/pm_enhancement/enhancement-reducer';
import pmscrum from '../member/pm_scrum/scrum-reducer';
import pmsprint from '../member/pm_sprint/sprint-reducer';
import pmtask from '../member/pm_task/task-reducer';
import pmtestcase from '../member/pm_testcase/testcase-reducer';
import pmtestscenario from '../member/pm_testscenario/testscenario-reducer';
import pmworkflow from '../member/pm_workflow/workflow-reducer';
import pmworkflowstep from '../member/pm_workflow/workflowstep-reducer';
import pmdeploy from '../member/pm_deploy/deploy-reducer';
import pmdeploypipeline from '../member/pm_deploy/deploy-pipeline-reducer';
import pmdeploysystem from '../member/pm_deploy/deploy-system-reducer';

const rootReducer = combineReducers({appPrefs,appMenus,session,member,status,adminstatus,memberdashboard,
  adminusers,adminlanguage,adminroles,adminpermissions,adminmenus,adminpreferences,adminpreferenceSub,admincategory,adminservice,adminbugs,systemclientdomain,systemapplication,systemservice,
acquaintances,admindashboard,userPrefs,pmteam,pmmember,pmrole,pmpermission,pmproduct,pmproject,pmrelease,pmbacklog,pmdefect,pmenhancement,pmscrum,pmsprint,pmtask,
pmtestcase,pmtestscenario,pmworkflow,pmworkflowstep,pmdeploy,pmdeploypipeline,pmdeploysystem});

export default rootReducer;
