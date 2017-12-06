import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput.js';
import Button from '../common/Button.js';
import Checkbox from '../common/Checkbox.js';
import Link from '../common/Link.js';

export default function Login({view, loginFields, loginTexts, loginLabels, onChangeLogin,
  registrationFields, registrationTexts, registrationLabels, onChangeRegistration}) {

  let items = [];
  if (view === 'login') {
    // LOGIN_FORM
    // fields
    for (var i = 0; i < loginFields.length; i++) {
      if (loginFields[i].fieldType === "TXT") {
        items.push(<TextInput name={loginFields[i].name} placeHolder={loginFields[i].label}/>);
      }
    }
    // Remember me
    items.push(<Checkbox name={loginTexts.LOGIN_FORM_REMEMBER_ME.name} label={loginTexts.LOGIN_FORM_REMEMBER_ME.value}/>);
    // buttons
    for (var l = 0; l < loginLabels.length; l++) {
      if (loginLabels[l].rendered) {
        items.push(<Button name={loginLabels[l].name} value={loginLabels[l].value} />);
      }
    }
    // Forgot Password
    items.push(<Link name={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.name} label={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.value}/>);
    // Change Password
    items.push(<Link name={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.name} label={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.value}/>);
  } else {
    // REGISTRATION_FORM
    // fields
    for (var f = 0; f < registrationFields.length; f++) {
      if (registrationFields[f].fieldType === "TXT") {
        items.push(<TextInput name={registrationFields[f].name} placeHolder={registrationFields[f].label}/>);
      }
    }
    // buttons
    for (var g = 0; g < registrationLabels.length; g++) {
      if (registrationLabels[g].rendered) {
        items.push(<Button name={registrationLabels[g].name} value={registrationLabels[g].value} />);
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
                  <div id="login-form" >
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
  onChangeRegistration: PropTypes.func
};
