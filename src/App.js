import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar id="Navbar"/>
        <div id='Main'>
          <Switch>
            <Redirect exact path='/' to='/home'></Redirect>
            <Route path='/home'><Home /></Route>
          </Switch>
        </div>
        <Footer id="Footer"/>
      </div>
    </Router>
  );
}

export default App;
