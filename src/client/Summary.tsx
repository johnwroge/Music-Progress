import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Summary (){

    const location = useLocation();

        //new material
       const piece = location.state.piece;
       const number = location.state.number;
       const plan = location.state.plan;
        //developing material
       const developing = location.state.developing;
       const refinement = location.state.refinement;
       const memorize = location.state.memorize;
        //performance material
       const perform = location.state.perform;
       const memory = location.state.memory;
       const renew = location.state.renew;
       console.log(location.state)
      
    return (
        <div > 
       
        <h2>Your Personalized Practice Sheet</h2> 
            
            <h3 className='summary-title'> New Material </h3>
                <div> Keep learning {piece} by working on 2 of {number} measures per day. 
                 Rember Divide into Sections. Establish interpretative/technical plan and maintain slow tempo until you have a feel for the music 
                <br/>
                Technical Plan: {plan}</div>

            <h3 className='summary-title'> Developing Material </h3>
                <div>  
                    Once you have a grasp of {developing} and can play the piece slowly while sight reading. Work on
                     increasing the tempo while memorizing the music. Refine the overall interpretation of the piece. 
                     <br/>
                     Memorizing plan: {memorize}
                     <br/>
                     Refining plan: {refinement} 
                     </div>
            <h3 className='summary-title'> Performance Material </h3>
                <div>  

                    Performance Material: {perform} 
                    <br/>
                    Memorizing Approach: {memory}
                    <br/>
                    Renewing Material: {renew}
                    <br/>
                </div>
            <h3 className='summary-title'> Technique </h3>
                <div> </div>
            <h3 className='summary-title'> Musicianship </h3>
                <div> </div>
            <Link
                to = "/"
            >
            <button className="next"> Back to Homepage </button>
            </Link>
        </div>
    )
}