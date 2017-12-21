import {combineReducers} from 'redux';
import initLogin from '../core/usermanagement/loginReducer';
import appPrefs from '../core/common/appPrefReducer';

const rootReducer = combineReducers({initLogin});

export default rootReducer;
