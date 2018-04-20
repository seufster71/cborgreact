import {combineReducers} from 'redux';
import appPrefs from '../core/common/apppref-reducer';
import appMenus from '../core/common/appmenu-reducer';
import member from '../member/member-reducer';
import session from '../member/session/session-reducer';
import status from '../core/status/status-reducer';
import users from '../admin/users/users-reducer';
import languages from '../admin/language/language-reducer';

const rootReducer = combineReducers({appPrefs,appMenus,session,member,status,users,languages});

export default rootReducer;
