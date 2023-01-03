import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Summary (){

    const location = useLocation();

    return (
        <div className = "todo"> 
       
        <h2>Your Personalized Practice Sheet</h2> 
           
            <Link
                to = "/"
            >
            <button className="next"> Back to Homepage </button>
            </Link>
        </div>
    )
}