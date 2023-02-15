import React, { Component } from 'react';
import { useContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, MemoryRouter} from 'react-router-dom';
// import { Context } from './Context';
import './App.css'
import Todos from './client/Todos';
import Title from './client/Title';
import Develop from './client/Develop';
import Performance from './client/Performance';
import Summary from './client/Summary';
import Technique from './client/Technique';
import { Switch } from '@mantine/core';
import Navbar from './client/Navbar';


function App() {
  
const AppLayout:any = () => {
  return(
  <>
    <Navbar/>
  </>
  )
}
  return (
    <div className='app'> 
    <Navbar/>
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
