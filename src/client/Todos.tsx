import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
//note: nanoid for ids if you want to retrieve and display these items
import {nanoid} from 'nanoid'

export default function Todos (){

    const location = useLocation();

    const [formData, setFormData] = React.useState(
        {
            piece: "",
            number: "",
            plan: "",
        }
    )

    const handleChange = (event: any) => {
        const {name, value, type} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:  value
            }
        }
        ) 
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

    }

    return (

        <> 
        <div className = "todo2"> 
       
        <form onSubmit={handleSubmit} >
            <h2> New Material </h2>
            <h5> What piece do you want to add? </h5>
                <input 
                    type="text"
                    placeholder="New music"
                    onChange={handleChange}
                    name="piece"
                    value={formData.piece}
                    >
                </input>
                <br />
                <h5> How many measures are there? </h5>
                <input 
                    type="text"
                    placeholder="Enter a number"
                    onChange={handleChange}
                    name="number"
                    value={formData.number}
                    >
                </input>
                <br />
                <h5> What is your technical plan? </h5>
                <textarea 
                     placeholder="Plan..."
                     onChange={handleChange}
                     name="plan"
                     value={formData.plan}
                    >
                </textarea>
                
                <div className = "button-container"> 
                <Link
                to = "/develop"
                state = {{
                    piece: formData.piece,
                    number: formData.number,
                    plan: formData.plan
                }}
                >
                     <button className='move'> Move on to Developing Material </button>
             </Link>
                     <button className='submit'> Submit </button>
                </div>
                
        </form>
        </div>
        
       
            
        </>
        
    )
}