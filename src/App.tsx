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


function App() {
  

  return (
    <Routes> 
      <Route path = "/" element = {<Title/>} />
      <Route path = "/todo" element= {<Todos/>} />
      <Route path = "/develop" element = {<Develop/>} />
      <Route path = "/performance" element = {<Performance/>} />
      <Route path = "/summary" element = {<Summary/>} />
    </Routes>
  )
}

export default App
