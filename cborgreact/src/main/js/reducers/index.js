import {combineReducers} from 'redux';
import initLogin from '../core/usermanagement/loginReducer';
import appPrefs from '../core/common/appPrefReducer';
import appMenus from '../core/common/appMenuReducer';

const rootReducer = combineReducers({appPrefs,appMenus});

export default rootReducer;
