import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Button = ({name, value, onClick}) => {
  let wrapperClass = 'form-group';

  return (
    <div className={wrapperClass}>
        <input type="submit" name={name} id={name} className="form-control btn btn-login" value={value} onClick={onClick}/>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
