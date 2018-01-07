import {combineReducers} from 'redux';
import appPrefs from '../core/common/appPrefReducer';
import appMenus from '../core/common/appMenuReducer';
import session from '../member/session/sessionReducer';
import login from '../core/usermanagement/loginReducer';

const rootReducer = combineReducers({appPrefs,appMenus,session,login});

export default rootReducer;
