import {combineReducers} from 'redux';
import appPrefs from '../core/common/apppref-reducer';
import appMenus from '../core/common/appmenu-reducer';
import session from '../member/session/session-reducer';
import navigation from '../core/navigation/nav-reducer';
import status from '../core/status/status-reducer';

const rootReducer = combineReducers({appPrefs,appMenus,session,navigation,status});

export default rootReducer;
