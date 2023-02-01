import React from 'react';
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import music from '../../public/music.png'

export default function Title (){
    return (
        <> 
        
        <div className = "outer-main"> 
            <h1 className='title'> Welcome to<span>Music Progress </span> </h1>
            <img src = {music}/>
         </div>   
         <p> Fill out the text areas to create a new practice sheet! </p>
            <div className='todoTitle'>
                <Link
                    to = "/todo"
                >
                <button className="next">Next Page</button>
                </Link>
            </div>
        </>
    )
}