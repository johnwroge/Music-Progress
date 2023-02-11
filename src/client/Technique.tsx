import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

// component to be added to 2nd last page

export default function Technique (){

    const location = useLocation();
    console.log(location.state)
    const [formData, setFormData] = React.useState(
        {
            technique: "",
            musicianship: "",
            diction: "",
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
        //     developing: "",
        //     refinement: "",
        //     memorize: "",
        // }
        // )
    }

    return (
        <div className = "todo2"> 
       
        <form onSubmit={handleSubmit} >
            <h2> Technique Exercises</h2>
            <h5> What technique exercises would you like to add </h5>
                <input 
                    type="text"
                    placeholder="technical exercises"
                    onChange={handleChange}
                    name="technique"
                    value={formData.technique}
                    >
                </input>
                <br />
                <h5> What type of additional topics can help better you as a musician? </h5>
                <textarea 
                     placeholder="Musicianship"
                     onChange={handleChange}
                     name="musicianship"
                     value={formData.musicianship}
                    >
                </textarea>
                <br />
                <h5> How are you working on memorizing this repertoire? </h5>
                <textarea 
                     placeholder="Intstrument specific work"
                     onChange={handleChange}
                     name="diction"
                     value={formData.diction}
                    >
                </textarea>
        </form>
        <div className='button-container'> 
        <Link
                to = "/summary"
                state = {{
                    piece: location.state.piece,
                    number: location.state.number,
                    plan: location.state.plan,
                    developing: location.state.developing,
                    refinement: location.state.refinement,
                    memorize: location.state.memorize,
                    perform: location.state.perform,
                    memory: location.state.memory,
                    renew: location.state.renew,
                    technique: formData.technique,
                    musicianship: formData.musicianship , 
                    diction: formData.diction, 
                   }}
            >
            <button className="next"> Move on to Summary Page </button>
            </Link>
            <button className='submit'> Submit </button>  
         </div>
        </div>
    )
}