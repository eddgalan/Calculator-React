import './App.css';
import { useState } from 'react';
import logo from './img/AlphaTeamDev-sm.png';
import ButtonCalc from './components/buttons/button.jsx';
import ButtonClear from './components/button-clear/button-clear.jsx';
import Screen from './components/screen/screen.jsx';

function App() {
  /*
    Crea un estado llamado input
    se actualiza el input por la función setInput
    el estado inicial del input es ''
  */
  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={ logo } alt="Logo AlphaTeamDev" />
      </div>
      <div className="calculator-container">
        <Screen input={ input } />
        <div className="row">
          <ButtonCalc click_btn={ addInput }> 1 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> 2 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> 3 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> + </ButtonCalc>
        </div>
        <div className="row">
          <ButtonCalc click_btn={ addInput }> 4 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> 5 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> 6 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> - </ButtonCalc>
        </div>
        <div className="row">
          <ButtonCalc click_btn={ addInput }> 7 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> 8 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> 9 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> * </ButtonCalc>
        </div>
        <div className="row">
          <ButtonCalc click_btn={ addInput }> = </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> 0 </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> . </ButtonCalc>
          <ButtonCalc click_btn={ addInput }> / </ButtonCalc>
        </div>
        <div className="row">
          <ButtonClear clearInput={ () => setInput('') }> Clear </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
