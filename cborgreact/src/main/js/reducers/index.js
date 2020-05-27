import {combineReducers} from 'redux';
import appPrefs from '../core/common/apppref-reducer';
import userPrefs from'../core/common/userpref-reducer';
import appMenus from '../core/common/appmenu-reducer';
import member from '../member/member-reducer';
import session from '../member/session/session-reducer';
import status from '../core/status/status-reducer';
import statuses from '../admin/status/status-reducer';
import users from '../admin/users/users-reducer';
import languages from '../admin/language/language-reducer';
import roles from '../admin/roles/roles-reducer';
import permissions from '../admin/permissions/permissions-reducer';
import menus from '../admin/menu/menus-reducer';
import preferences from '../admin/preferences/preferences-reducer';
import preferenceSubView from '../admin/preferences/preference-subview-reducer';
import category from '../admin/category/category-reducer';
import services from '../admin/service/service-reducer';
import clientDomains from '../system/clientdomain/clientdomain-reducer';
import applications from '../system/application/application-reducer';
import bugs from '../admin/bugs/bugs-reducer';
import acquaintances from '../member/acquaintances/acquaintances-reducer';
import dashboard from '../admin/dashboard/dashboard-reducer';
import pmproduct from '../member/pm_product/product-reducer';
import pmproject from '../member/pm_project/project-reducer';
import pmrelease from '../member/pm_release/release-reducer';
import pmbacklog from '../member/pm_backlog/backlog-reducer';
import pmdefect from '../member/pm_defect/defect-reducer';
import pmenhancement from '../member/pm_enhancement/enhancement-reducer';

const rootReducer = combineReducers({appPrefs,appMenus,session,member,status,statuses,
  users,languages,roles,permissions,menus,preferences,preferenceSubView,category,services,clientDomains,applications,bugs,
acquaintances,dashboard,userPrefs,pmproduct,pmproject,pmrelease,pmbacklog,pmdefect,pmenhancement});

export default rootReducer;
