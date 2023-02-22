import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './client/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router> 
    <App />
    </Router>
  </React.StrictMode>,
)
