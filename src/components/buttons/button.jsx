import React from 'react';
import './button.css';

function ButtonCalc(props) {
  const isOperator = value => {
    return isNaN(value) && (value != ' . ') & (value != ' = ');
  };

  return (
    <div className={ `button-container ${ isOperator(props.children) ? 'operador' : '' }`.trimEnd() }
      onClick={ () => props.click_btn(props.children) }>
      { props.children }
    </div>
  );
}

export default ButtonCalc;
