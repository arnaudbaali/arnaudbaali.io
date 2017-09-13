import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Highlight from './component/Jumbotron';
import Experience from './component/Experience';
import Footer from './component/Footer';
import Education from './component/Education';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Highlight/>
        <Experience/>
        <Education/>
        <Footer/>
      </div>
    );
  }
}

export default App;
