import React from "react";
import { Route } from "react-router-dom";
import Login from './login/login'
import Home from './home/home'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Route extact path='/login' render={() => <Login />} />
      <Route extact path='/home' render={()=> <Home/>}/>
    </div>
  );
}

export default App;
