import callService from '../../core/api/Api';

// actions
export function loadSessionCheck(responseJson) {
  return { type: "LOAD_SESSION_CHECK", responseJson };
}

// thunk
export function sessionCheck() {
  return function(dispatch) {
    let requestParams = {};
    requestParams.action = "CHECK";
    requestParams.service = "MEMBER_SVC";
    let params = {};
    params.requestParams = requestParams;
    params.URI = '/api/member/callService';

    return callService(params).then( (responseJson) => {
      dispatch(loadSessionCheck(responseJson));
    }).catch(error => {
      throw(error);
    });

  };
}
