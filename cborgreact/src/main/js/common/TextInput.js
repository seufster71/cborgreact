import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeHolder, value, error, inputType}) => {
  let wrapperClass = 'form-group';
  let errorLabel = '';
  if (inputType == null || inputType.length == 0){
    inputType = "text";
  }
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
    errorLabel = <label id={name + "-error"} className="control-label has-error" htmlFor={name}>Input error</label>;
  }

  return (
    <div className={wrapperClass}>
      <input type={inputType} className="form-control" autoCapitalize="off" onChange={onChange} id={name} name={name} placeholder={placeHolder}/>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  inputType: PropTypes.string
};

export default TextInput;
