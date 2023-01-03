import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Performance (){

    const location = useLocation();

    const [formData, setFormData] = React.useState(
        {
            perform: "",
            memory: "",
            renew: "",
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
        
        // setFormData(
        //     {
        //     perform: "",
        //     memory: "",
        //     renew: "",
        // }
        // )
    }

    return (
        <div className = "todo"> 
       
        <form onSubmit={handleSubmit} >
            <h2> Performance Material </h2>
            <h5> What piece do you want to add? </h5>
                <input 
                    type="text"
                    placeholder="Piece to Perform"
                    onChange={handleChange}
                    name="perform"
                    value={formData.perform}
                    >
                </input>
                <br />
                <h5> How are you maintaining your memory for this piece </h5>
                <textarea 
                     placeholder="Plan..."
                     onChange={handleChange}
                     name="memory"
                     value={formData.memory}
                    >
                </textarea>
                <br />
                <h5> How are you working on renewing this material? </h5>
                <textarea 
                     placeholder="Plan..."
                     onChange={handleChange}
                     name="renew"
                     value={formData.renew}
                    >
                </textarea>
           <button> 
            Submit 
            </button>
        </form>
            <Link
                to = "/summary"
                state = {{
                    piece: location.state.piece,
                    number: location.state.number,
                    plan: location.state.plan,
                    developing: location.state.developing,
                    refinement: location.state.refinement,
                    memorize: location.state.memorize,
                    perform: formData.perform,
                    memory: formData.memory,
                    renew: formData.renew
                   }}
            >
            <button className="next"> Move on to Summary </button>
            </Link>
        </div>
    )
}