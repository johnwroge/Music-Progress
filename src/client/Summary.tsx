import React from 'react';
import { useRef } from 'react'
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import { jsPDF } from 'jspdf';

export default function Summary (this: any){

    const location = useLocation();
    const reportTemplateRef: any = useRef(null);

        //new material
       const piece = String(location.state.piece);
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
        //technique material
       const diction = location.state.diction; 
       const technique = location.state.technique;
       const musicianship = location.state.musicianship; 

       //need to fix download pdf issue, tried two different methods and neither worked 

    const handleGeneratePdf = () => {
		// const doc = new jsPDF({
		// 	format: 'a4',
        //     // format: [4,2],
		// 	unit: 'px',
		// });

        const doc = new jsPDF({
            orientation: 'l',
            unit: 'pt',
            format: 'a4',
            putOnlyUsedFonts:true,
            floatPrecision: 4 // or "smart", default is 16
        })

    doc.setFont('Inter-Regular', 'normal');

	doc.html(reportTemplateRef.current, {
		async callback(doc) {
		await doc.save('document');
			},
		});
	};

    const suggestions = ['Remember to divide into Sections.','Establish interpretative/technical plan and maintain slow tempo until you have a feel for the music ',
'Once you have a grasp of and can play the piece slowly while sight reading.', 'Work on increasing the tempo while memorizing the music.', 'Refine the overall interpretation of the piece. '
 ]

        
    return (
        <div className = "summary" > 
       <div ref = {reportTemplateRef} > 
        <h2>Your Personalized Practice Sheet</h2> 
            
            <h3 className='summary-title'> New Material </h3>
                <div> New Piece: {piece} Number of Measures: {number} 
                  
                <br/>
                Technical Plan: {plan}</div>

            <h3 className='summary-title'> Developing Material </h3>
                <div>  
                     Current: {developing}  
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
                <div>
                    {technique}
                </div>
            <h3 className='summary-title'> Musicianship </h3>
                <div> {musicianship} </div>
                <div> {diction} </div>
             </div>
        <div className='button-container'>
            <Link
                to = "/"
            >
            <button className="next"> Back to Homepage </button>
            </Link>
            <button className = "submit" onClick ={handleGeneratePdf}> Download PDF </button>
        </div>  
        </div>
    )
}





