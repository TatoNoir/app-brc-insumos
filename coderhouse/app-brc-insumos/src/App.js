import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Brands from './components/Brands/Brands';
import Contact from './components/Contact/Contact';

function App() {

  

  return (
    <BrowserRouter>
    <div className="App">
      
        <NavBar/>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Store">
            <Store />
          </Route>
          <Route exact path="/Brands">
            <Brands />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
         
        </Switch>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
