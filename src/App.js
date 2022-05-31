import './App.css';
import logo from './img/AlphaTeamDev-sm.png';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={ logo } alt="Logo AlphaTeamDev" />
      </div>
      <div className="calculator-container">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
