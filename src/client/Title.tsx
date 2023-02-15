import React from 'react';
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import music from '../../public/music.png'
import Navbar from './Navbar';

export default function Title (){
    return (
      
        <> 
            {/* <Navbar/> */}

            <div className = "outer-main"> 
                <h2 > Welcome to  </h2>
                <h1 className='title' >Musical Progress</h1>
                <p> Fill out the text areas to create a new practice sheet! </p>
                    <Link to = "/todo">
                    <button className="next">Get Started</button>
                    </Link>
            </div> 
       </>
    )
}