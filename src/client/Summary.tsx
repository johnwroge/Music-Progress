import React from 'react';
import { useRef } from 'react'
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import { jsPDF } from 'jspdf';
import useSWR from "swr"; 

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


    //helper function to generate pdf for user
    const handleGeneratePdf = () => {
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

    //would like to incorporate some kind of support with areas of interest, i.e. tips to memorize, play cleaner ect
    const suggestions = ['Remember to divide into Sections.','Establish interpretative/technical plan and maintain slow tempo until you have a feel for the music ',
'Once you have a grasp of and can play the piece slowly while sight reading.', 'Work on increasing the tempo while memorizing the music.', 'Refine the overall interpretation of the piece. '
 ];

  interface Todo {
    id: number;
    piece: string;
    number: number;
    plan: string;

    // developing: string;
    // refinement: string;
    // memorize: string;
    // perform: string;
    // memory: string;
    // renew: string;
    // technique: string;
    // musicianship: string;
    // diction: string; 
    
}






 const fetcher =  function () {
//    fetch(`${ENDPOINT}/${url}`).then((r) => r.json()).then((data) => console.log(data));

    const response =  fetch(`http://localhost:4000/`)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
 }

   
   /* const { data, mutate } = useSWR<Todo[]>("api/todos", fetcher);
 
   async function markTodoAdDone(id: number) {
     const updated = await fetch(`${ENDPOINT}/api/todosn/${id}/done`, {
       method: "PATCH",
     }).then((r) => r.json());
 
     mutate(updated);
   */

 

        
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
                    Technical Exercises: {technique}
                </div>
            <h3 className='summary-title'> Musicianship </h3>
                <div> Musicianship: {musicianship} </div>
                <div> Memorization Technique {diction} </div>
             </div>
        <div className='button-container'>
            <Link
                to = "/"
            >
            <button className="next"> Back to Homepage </button>
            </Link>
            <button className = "submit" onClick ={handleGeneratePdf}> Download PDF </button>
            <button className='next' onClick = {fetcher}> Save Pratice Sheet </button>
        </div>  
        </div>
    )
}





