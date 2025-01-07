import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Covid-19 Dashboard
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iframe title="Covid-19 cases in Ontario hospitals" width="900" height="673.5" src="https://app.powerbi.com/view?r=eyJrIjoiYWMyZWM2OTMtZWQ4OC00NTM3LWIxZTItYTc1Y2VkNzQ4Njk3IiwidCI6ImIyOWJkMTk1LTQyNGUtNGEzMi04ZTFmLTE2YmMwMzQ0NmRhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
        </a>
      </header>
    </div>
  );
}

export default App;
