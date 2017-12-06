import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({name, label, onChange}) => {
  let wrapperClass = 'form-group text-center';

  return (
    <div className={wrapperClass}>
      <input className="" type="checkbox" id={name} name={name}/>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default Checkbox;
