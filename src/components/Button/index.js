import React from 'react';
import './style.css';

const Button = (props) => {
  return (
    <button
      type={ props.type || 'button' }
      disabled={ props.disabled || false }
      onClick={ props.onClick }
      style={ props.style }
      className={[
        'btn btn-primary regular',
        props.className,
        props.size ? `${props.size}` : 'medium'
      ].join( ' ' )}
    >{props.text}</button>
  );
};

export default Button;
