import React from 'react';
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Title (){
    return (
        
        <div className = "outer-main"> 
            <div className='todo'>
            <h1 className='title'> Muse Tracker </h1>
            <h4> Fill out the text areas to create a new practice sheet! </h4>
            <Link
                    to = "/todo"
                >
                <button className="next">Next Page</button>
                </Link>
            </div>
        </div>
    )
}