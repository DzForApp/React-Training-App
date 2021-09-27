import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/NavBar/Toolbar';
 import Main from './components/Main/main';
 
import { Grid, Row, Col } from 'react-flexbox-grid';
 

class App extends Component{
 

  render(){
     
  return (
    
    <div className="App">
      
         <Toolbar />
          
         <Main />
       
    
    </div>
  );
  }
}

export default App;
