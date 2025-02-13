import logo from './logo.svg';
import './App.css';
import RoutePublic from './components/Router/public/RoutePublic';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <RoutePublic />
        <img src={logo} className="App-logo" alt="logo"  /> 
        
       
        
      </header>
    </div>
  );
}

export default App;
