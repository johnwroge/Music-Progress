import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import music from '../assets/music.png';
import github from '../assets/github.png'

export default function Navbar (){
    return (
   
            <nav className='navbar'> 
                <ul className='left'> 
                    <li> <img className='img1' src = {music}/> </li>
                    <li> About </li> 
                    <li> Examples </li> 
                    
                </ul>
                <ul className='right'>   
                    <li> Login </li>
                    <a href = "https://github.com/johnwroge/Music-Progress" target= "_blank"> <li> <img src = {github} />  </li> </a>
                </ul>
            </nav>
      

    )
}