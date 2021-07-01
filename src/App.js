import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import './App.css'
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Divider from './components/Divider'
import Links from './components/Links'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header id="header" />
                <SubHeader id="subHeader" />
                <Sidebar id="sidebar" />
                <Divider id="divider" />
                <div id='main'>
                    <Switch>
                        <Redirect exact path='/' to='/home'></Redirect>
                        <Route path='/home'><Home /></Route>
                        <Route path='/links'><Links /></Route>
                    </Switch>
                </div>

            </div>
        </Router>
    );
};

export default App;