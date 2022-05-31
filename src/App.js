import './App.css';
import logo from './img/AlphaTeamDev-sm.png';
import ButtonCalc from './components/buttons/button.jsx';
import Screen from './components/screen/screen.jsx';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={ logo } alt="Logo AlphaTeamDev" />
      </div>
      <div className="calculator-container">
        <Screen />
        <div className="row">
          <ButtonCalc> 1 </ButtonCalc>
          <ButtonCalc> 2 </ButtonCalc>
          <ButtonCalc> 3 </ButtonCalc>
          <ButtonCalc> + </ButtonCalc>
        </div>
        <div className="row">
          <ButtonCalc> 4 </ButtonCalc>
          <ButtonCalc> 5 </ButtonCalc>
          <ButtonCalc> 6 </ButtonCalc>
          <ButtonCalc> - </ButtonCalc>
        </div>
        <div className="row">
          <ButtonCalc> 7 </ButtonCalc>
          <ButtonCalc> 8 </ButtonCalc>
          <ButtonCalc> 9 </ButtonCalc>
          <ButtonCalc> * </ButtonCalc>
        </div>
        <div className="row">
          <ButtonCalc> = </ButtonCalc>
          <ButtonCalc> 0 </ButtonCalc>
          <ButtonCalc> . </ButtonCalc>
          <ButtonCalc> / </ButtonCalc>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
