
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, children, type }) => {
  return (
    <button type={type}
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;