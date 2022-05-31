import React from 'react';
import './button.css';

function ButtonCalc(props) {
  const isOperator = value => {
    return isNaN(value) && (value != ' . ') & (value != ' = ');
  };

  return (
    <div className={ `button-container ${ isOperator(props.children) ? 'operador' : '' }`.trimEnd() }>
      { props.children }
    </div>
  );
}

export default ButtonCalc;
