/*
PERTEMUAN 09
23 Oktober 2019

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

React Router
*********

export bisa berbentuk:

export const
export function
export class

*/



import React from 'react';

import {  BrowserRouter as Router,  Route, Link } from 'react-router-dom'

export default class App extends React.Component {
    render() {
      return (
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Router>
      )
    }
}
const Home = () => (<div><h1>Welcome home</h1><Link to='/about'>Go to about</Link></div>)
const About = () => (<div><h1>About Us</h1><Link to='/'>Go to home</Link></div>)
