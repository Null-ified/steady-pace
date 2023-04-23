import logo from './allthebrightplaces.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SteadyPace
        </p>
        <a
          className="App-link"
          href="Main.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start
        </a>
      </header>
    </div>
  );
}

export default App;
