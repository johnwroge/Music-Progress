import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Develop (){

    const location = useLocation();

    const [formData, setFormData] = React.useState(
        {
            developing: "",
            refinement: "",
            memorize: "",
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
            developing: "",
            refinement: "",
            memorize: "",
        }
        )
    }

    return (
        <div className = "todo"> 
       
        <form onSubmit={handleSubmit} >
            <h2> Developing Material </h2>
            <h5> What piece do you want to add? </h5>
                <input 
                    type="text"
                    placeholder="developing material"
                    onChange={handleChange}
                    name="developing"
                    value={formData.developing}
                    >
                </input>
                <br />
                <h5> How are you refining the interpretation? </h5>
                <textarea 
                     placeholder="Refinement..."
                     onChange={handleChange}
                     name="refinement"
                     value={formData.refinement}
                    >
                </textarea>
                <br />
                <h5> How are you working on memorizing this repertoire? </h5>
                <textarea 
                     placeholder="Plan to memorize..."
                     onChange={handleChange}
                     name="memorize"
                     value={formData.memorize}
                    >
                </textarea>
           <button> 
            Submit 
            </button>
        </form>
            <Link
                to = "/performance"
                state = {{
                    piece: location.state.piece,
                    number: location.state.number,
                    plan: location.state.plan,
                    developing: formData.developing,
                    refinement: formData.refinement,
                    memorize: formData.memorize
                   }}
            >
            <button className="next"> Move on to Performance Material </button>
            </Link>
        </div>
    )
}