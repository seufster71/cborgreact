import {combineReducers} from 'redux';
import appPrefs from '../core/common/appPrefReducer';
import appMenus from '../core/common/appMenuReducer';
import session from '../member/session/sessionReducer';

const rootReducer = combineReducers({appPrefs,appMenus,session});

export default rootReducer;
