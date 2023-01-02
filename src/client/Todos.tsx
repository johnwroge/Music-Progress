import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

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
        
        setFormData(
            {
            piece: "",
            number: "",
            plan: "",
        }
        )
    }

    return (
        <div className = "todo"> 
       
        <form onSubmit={handleSubmit} >
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
           <button> 
            Submit 
            </button>
        </form>
        </div>
    )
}