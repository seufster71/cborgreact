import {combineReducers} from 'redux';
import appPrefs from '../core/common/apppref-reducer';
import userPrefs from'../core/common/userpref-reducer';
import appMenus from '../core/common/appmenu-reducer';
import member from '../member/member-reducer';
import session from '../member/session/session-reducer';
import status from '../core/status/status-reducer';
import users from '../admin/users/users-reducer';
import languages from '../admin/language/language-reducer';
import roles from '../admin/roles/roles-reducer';
import permissions from '../admin/permissions/permissions-reducer';
import menus from '../admin/menu/menus-reducer';
import preferences from '../admin/preferences/preferences-reducer';
import category from '../admin/category/category-reducer';
import services from '../system/services/services-reducer';
import clientDomains from '../system/clientdomain/clientdomain-reducer';
import applications from '../system/application/application-reducer';
import bugs from '../admin/bugs/bugs-reducer';
import acquaintances from '../member/acquaintances/acquaintances-reducer';

const rootReducer = combineReducers({appPrefs,appMenus,session,member,status,
  users,languages,roles,permissions,menus,preferences,category,services,clientDomains,applications,bugs,
acquaintances,userPrefs});

export default rootReducer;
