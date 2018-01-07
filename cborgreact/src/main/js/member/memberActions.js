import callService from '../core/api/Api';

// actions
export function loadInitMember(responseJson) {
  return { type:'LOAD_INIT_MEMBER', responseJson };
}


// thunks
export function initMember(inputFields) {
  return function(dispatch) {
    let requestParams = {};
    requestParams.action = "INIT";
    requestParams.service = "MEMBER_SVC";
    requestParams.menuNames = new Array("MEMBER_MENU_RIGHT");
    requestParams.inputFields = inputFields;
    let params = {};
    params.requestParams = requestParams;
    params.URI = '/api/member/callService';

    return callService(params).then( (responseJson) => {
      dispatch(loadInitMember(responseJson));
    }).catch(error => {
      throw(error);
    });

  };
}
