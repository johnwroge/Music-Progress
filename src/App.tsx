import React, { Component } from 'react';
import { useContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { Context } from './Context';
import './App.css'
import Todos from './client/Todos';
import Title from './client/Title';

function App() {
  

  return (
    <Routes> 
      
      <Route path = "/" element = {<Title/>} />
      <Route path = "todo" element= {<Todos/>} />
      
    
    </Routes>
  )
}

export default App
