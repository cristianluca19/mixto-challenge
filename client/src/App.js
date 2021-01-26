import React from 'react';
import {BrowserRouter, Route , Switch} from "react-router-dom";
import Registro from'./registro/registro.jsx'
import Inicio from './inicio/inicio.jsx'

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Route extact path='/' component={Inicio} /> 
      <Route extact path='/registro' component={Registro} /> 
      <Switch> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
