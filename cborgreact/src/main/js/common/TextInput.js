import React, {Component} from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeHolder, value, error}) => {
  let wrapperClass = 'form-group';
  let errorLabel = '';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
    errorLabel = <label id={name + "-error"} className="control-label has-error" htmlFor={name}>Input error</label>;
  }

  return (
    <div className={wrapperClass}>
      <input type="text" className="form-control" autoCapitalize="off" id={name} name={name} placeholder={placeHolder}/>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
