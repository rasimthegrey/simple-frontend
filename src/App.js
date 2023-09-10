import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a CI test!
        </p>
        <p>Continuous Integration and Continuous Deployment</p>
      </header>
    </div>
  );
}

export default App;
