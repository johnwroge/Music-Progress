import React from 'react';
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Title (){
    return (
        <div className='todo'>
           <h1 > Muse Tracker </h1>
           <h4 className='main-par'> Fill out the included text areas to create a new practice sheet </h4>
           <Link
                to = "/todo"
            >
            <button className="next">Next Page</button>
            </Link>
        </div>
    )
}