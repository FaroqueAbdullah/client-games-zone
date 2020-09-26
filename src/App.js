import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

import './App.css';

const App = () => (
  <Router>
    <Header />
    <Route path="/" exact component={Join}/>
    <Route path="/home" exact component={Home}/>
    <Route path="/chat" exact component={Chat}/> 
  </Router>
)

export default App;
