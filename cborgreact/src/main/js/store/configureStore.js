import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore() {
  const initialState = {
    appPrefs: { lang: localStorage.getItem("lang"),
      headerName: "ToastHub",
      codeType : 'WEB',
      debugClient: "TRACE",
      memberMenu:'MEMBER_MENU_TOP',
      adminMenu:'ADMIN_MENU_TOP',
      systemMenu:'SYSTEM_MENU_TOP'
    },
    session: { sessionActive: false , viewPort: 'large', callComplete: false },
    status: { error: null, info: null, warn: null },
	member: { view: "login" }
  };
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
// user:localStorage.getItem("user")
