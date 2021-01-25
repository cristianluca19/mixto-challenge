import React from 'react';
import { Route } from "react-router-dom";
import Registro from'./registro/registro'
import Inicio from './inicio/inicio'

import './App.css';

function App() {
  return (
    <div className='App'>
      <Route extact path='/inicio' render={() => <Inicio />} />
      
      <Route extact path='/registro' render={() => <Registro />} />
      
    </div>
  );
}

export default App;
