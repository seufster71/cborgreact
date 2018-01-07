export default function sessionReducer(state = {}, action) {
  switch(action.type) {
    case 'LOAD_SESSION_CHECK': {
      let myState = {};
      if (action.responseJson != null) {
        if (action.responseJson.params != null) {
          if (action.responseJson.params.heath != null) {
            myState.sessionActive = true;
          }
        } else if (action.responseJson.status != null && action.responseJson.status == 401) {
          myState.sessionActive = false;
        }
      }
      return Object.assign({}, state, myState);
    }
    case 'SAVE_AUTHENTICATION': {
      let myState = {};
      if (action.responseJson != null && action.responseJson.params != null
        && action.responseJson.params.status != null && action.responseJson.params.status.info != null) {
        let infos = action.responseJson.params.status.info;
        for (var i = 0; i < infos.length; i++) {
          if (infos[i].code === "success" && infos[i].message === "Authenticated") {
            myState.sessionActive = true;
          }
        }
      }
      return Object.assign({}, state, myState);
    }
      default:
        return state;
    }
  }
