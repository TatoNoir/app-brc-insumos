import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Store from './components/Store/Store';

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Store">
            <Store />
          </Route>
         
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
