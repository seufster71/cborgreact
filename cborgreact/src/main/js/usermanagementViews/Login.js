import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import CheckBox from '../common/CheckBox';
import Link from '../common/Link';
import PasswordMeter from '../common/PasswordMeter';

export default function Login({view, errorMap, loginFields, loginTexts, loginLabels, onChangeLogin,
  registrationFields, registrationTexts, registrationLabels, onChangeRegistration, fieldChangeEvent,
  fieldBlurEvent, buttonClick}) {

  let items = [];
  let formId = "login-form";
  if (view === 'login') {
    // LOGIN_FORM
    // fields
    for (var i = 0; i < loginFields.length; i++) {
      if (loginFields[i].fieldType === "TXT") {
        items.push(<TextInput
          key={loginFields[i].name}
          id={loginFields[i].name}
          name={loginFields[i].name}
          placeHolder={loginFields[i].label}
          inputType={loginFields[i].htmlType}
          onBlur={fieldBlurEvent}/>);
      }
    }
    // Remember me
    items.push(<CheckBox
      key={loginTexts.LOGIN_FORM_REMEMBER_ME.name}
      id={loginTexts.LOGIN_FORM_REMEMBER_ME.name}
      name={loginTexts.LOGIN_FORM_REMEMBER_ME.name}
      label={loginTexts.LOGIN_FORM_REMEMBER_ME.value}
      onChange={fieldChangeEvent}/>);
    // buttons
    for (var l = 0; l < loginLabels.length; l++) {
      if (loginLabels[l].rendered) {
        items.push(<Button
          key={loginLabels[l].name}
          id={loginLabels[l].name}
          name={loginLabels[l].name}
          value={loginLabels[l].value}
          onClick={buttonClick}/>);
      }
    }
    // Forgot Password
    items.push(<Link
      key={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.name}
      id={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.name}
      name={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.name}
      label={loginTexts.LOGIN_FORM_FORGOT_PASSWORD.value}/>);
    // Change Password
    items.push(<Link
      key={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.name}
      id={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.name}
      name={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.name}
      label={loginTexts.LOGIN_FORM_CHANGE_PASSWORD.value}/>);
  } else {
    // REGISTRATION_FORM
    // fields
    formId = "registration-form";
    for (var f = 0; f < registrationFields.length; f++) {
      if (registrationFields[f].fieldType === "TXT") {
        items.push(<TextInput
          key={registrationFields[f].name}
          id={registrationFields[f].name}
          name={registrationFields[f].name}
          placeHolder={registrationFields[f].label}
          inputType={registrationFields[f].htmlType}
          error={errorMap[registrationFields[f].name]}
          onBlur={fieldBlurEvent}/>);
      }
      if (registrationFields[f].htmlType === "password") {
        if (registrationFields[f].optionalParams == null) {
          // show password requirements
          items.push(<PasswordMeter
            key="{registrationFields[f].name}-METER"
            name={registrationFields[f].name}
            alphaCheckCss="has-error"
            alphaCheckValue={registrationTexts.REGISTRATION_FORM_ALPHA_CHECK.value}
            capitalCheckCss="alert alert-success"
            capitalCheckValue={registrationTexts.REGISTRATION_FORM_CAPITAL_CHECK.value}
            numberCheckCss="has-error"
            numberCheckValue={registrationTexts.REGISTRATION_FORM_NUMBER_CHECK.value}
            specialCheckCss="has-error"
            specialCheckValue={registrationTexts.REGISTRATION_FORM_SPECIAL_CHECK.value}
            countCheckCss="has-error"
            countCheckValue={registrationTexts.REGISTRATION_FORM_COUNT_CHECK.value} />);
        } else if (registrationFields[f].optionalParams != null) {
          // show password check match
        }
      }
    }
    // buttons
    for (var g = 0; g < registrationLabels.length; g++) {
      if (registrationLabels[g].rendered) {
        items.push(<Button
          key={registrationLabels[g].name}
          id={registrationLabels[g].name}
          name={registrationLabels[g].name}
          value={registrationLabels[g].value}
          onClick={buttonClick}/>);
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
  errorMap: PropTypes.object,
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
