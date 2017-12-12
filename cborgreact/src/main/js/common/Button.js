import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Button = ({name, value, onClick}) => {
  let wrapperClass = 'form-group';

  return (
    <div className={wrapperClass}>
      <div className="col-sm-6 col-sm-offset-3">
        <input type="submit" name={name} id={name} className="form-control btn btn-login" value={value} onClick={onClick}/>
      </div>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
