import React, {Component} from 'react';
import './style.css';
import './App.css';
import Navigation from './components/Navigation';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navigation/>
        <h1>FRIHED ART ECOMMERCE</h1>
        <h2>Tienda de Arte by Katerin Morales</h2>
      </div>
    );
  }
  
}

export default App;
