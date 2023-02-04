import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import music from '../../public/music.png';


export default function Navbar (){
    return (
   
            <nav className='navbar'> 
                <ul className='left'> 
                    <li> <img className='img1' src = {music}/> </li>
                    <li> About </li>
                    <li> Examples </li>
                </ul>

                <ul className='right'> 
                    <li> Stuff </li> 
                    <li> Github  </li>
                    <li> Login </li>

                </ul>
            </nav>
      

    )
}