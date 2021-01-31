import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src="https://unileao.edu.br/wp-content/themes/portalv2.0/img/logo.svg" className="App-logo" alt="logo" />
       <div className="App-content">
          <span>
            Especialização de engenharia de software
          </span>
          <p>Gerência de configuração</p>
          <a
            className="App-link"
            href="https://unileao.edu.br/"
            target="_blank"
            rel="unileao"
          >
            Unileão
          </a>
       </div> 
      </header>
    </div>
  );
}

export default App;
