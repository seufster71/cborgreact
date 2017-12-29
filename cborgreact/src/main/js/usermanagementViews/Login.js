import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput.js';
import Button from '../common/Button.js';
import CheckBox from '../common/CheckBox.js';
import Link from '../common/Link.js';

export default function Login({view, loginFields, loginTexts, loginLabels, onChangeLogin,
  registrationFields, registrationTexts, registrationLabels, onChangeRegistration, fieldChangeEvent, fieldBlurEvent, buttonClick}) {

  let items = [];
  let formId = "login-form";
  if (view === 'login') {
    // LOGIN_FORM
    // fields
    for (var i = 0; i < loginFields.length; i++) {
      if (loginFields[i].fieldType === "TXT") {
        items.push(<TextInput key={loginFields[i].name} id={loginFields[i].name} name={loginFields[i].name} placeHolder={loginFields[i].label} inputType={loginFields[i].htmlType} onBlur={fieldBlurEvent}/>);
      }
    }
    // Remember me
    items.push(<CheckBox key={loginTexts.LOGIN_FORM_REMEMBER_ME.name} id={loginTexts.LOGIN_FORM_REMEMBER_ME.name} name={loginTexts.LOGIN_FORM_REMEMBER_ME.name} label={loginTexts.LOGIN_FORM_REMEMBER_ME.value} onChange={fieldChangeEvent}/>);
    // buttons
    for (var l = 0; l < loginLabels.length; l++) {
      if (loginLabels[l].rendered) {
        items.push(<Button key={loginLabels[l].name} id={loginLabels[l].name} name={loginLabels[l].name} value={loginLabels[l].value} onClick={buttonClick}/>);
      }
    }
    // Forgot Password
    items.push(<Link key={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.name} id={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.name} name={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.name} label={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.value}/>);
    // Change Password
    items.push(<Link key={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.name} id={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.name} name={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.name} label={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.value}/>);
  } else {
    // REGISTRATION_FORM
    // fields
    formId = "registration-form";
    for (var f = 0; f < registrationFields.length; f++) {
      if (registrationFields[f].fieldType === "TXT") {
        items.push(<TextInput key={registrationFields[f].name} id={registrationFields[f].name} name={registrationFields[f].name} placeHolder={registrationFields[f].label} inputType={registrationFields[f].htmlType} onChange={fieldChangeEvent}/>);
      }
    }
    // buttons
    for (var g = 0; g < registrationLabels.length; g++) {
      if (registrationLabels[g].rendered) {
        items.push(<Button key={registrationLabels[g].name} id={registrationLabels[g].name} name={registrationLabels[g].name} value={registrationLabels[g].value} onClick={buttonClick}/>);
      }
    }
  }

  return (
    <header>
      <div className="intro-text">
        <div className="row">
          <div id="content_column" className="col-md-6 col-md-offset-3">
            <div className="panel panel-login">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-6"><a href="#" className="active" onClick={onChangeLogin} id={loginTexts.LOGIN_FORM_HEADER.name}>{loginTexts.LOGIN_FORM_HEADER.value}</a></div>
                  <div className="col-xs-6"><a href="#" className="active" onClick={onChangeRegistration} id="Reg-link">Registration</a></div>
                </div>
              </div>
            </div>
            <div id="login-status" role="alert" />
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                  <div id={formId} >
                    {items}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}

Login.propTypes = {
  view: PropTypes.string.isRequired,
	loginFields: PropTypes.array.isRequired,
  loginTexts: PropTypes.object,
  loginLabels: PropTypes.array,
  registrationFields: PropTypes.array.isRequired,
  registrationTexts: PropTypes.object,
  registrationLabels: PropTypes.array,
  onChangeLogin: PropTypes.func,
  onChangeRegistration: PropTypes.func,
  fieldChangeEvent: PropTypes.func,
  fieldBlurEvent: PropTypes.func,
  buttonClick: PropTypes.func
};
