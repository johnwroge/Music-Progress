import React, { Component } from 'react';
import { useContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { Context } from './Context';
import './App.css'
import Todos from './client/Todos';
import Title from './client/Title';
import Develop from './client/Develop';
import Performance from './client/Performance';
import Summary from './client/Summary';
import Technique from './client/Technique';


function App() {
  

  return (
    <div className='app'> 
    <Routes> 
      <Route path = "/" element = {<Title/>} />
      <Route path = "/todo" element= {<Todos/>} />
      <Route path = "/develop" element = {<Develop/>} />
      <Route path = "/performance" element = {<Performance/>} />
      <Route path = "/technique" element = {<Technique/>} />
      <Route path = "/summary" element = {<Summary/>} />
    </Routes>
    </div>
  )
}

export default App
