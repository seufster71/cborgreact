import {combineReducers} from 'redux';
import appPrefs from '../core/common/appPrefReducer';
import appMenus from '../core/common/appMenuReducer';
import session from '../member/session/sessionReducer';
import navigation from '../core/navigation/navReducer';
import status from '../core/status/statusReducer';

const rootReducer = combineReducers({appPrefs,appMenus,session,navigation,status});

export default rootReducer;
