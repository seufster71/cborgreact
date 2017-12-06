import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({name, value, index, onChange}) => {
  let wrapperClass = 'form-group';

  return (
    <div className={wrapperClass}>
      <div className="col-sm-6 col-sm-offset-3">
        <input type="submit" name={name} tabIndex={index} id={name} className="form-control btn btn-login" value={value}/>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  index: PropTypes.integer,
  onChange: PropTypes.func,
};

export default Checkbox;
