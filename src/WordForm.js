import React, { useState } from "react";
import './WordForm.css'

const WordForm = () => {
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = document.querySelector("form");
        form.classList.add("invisible");
        const para = document.getElementById("final-paragraph");
        para.classList.remove("invisible")
        // do something with the data submitted
    };

    const [formData, setFormData] = useState({
        noun1: "",
        noun2: "",
        noun3: "",
        noun4: "",
        verb1: "",
        verb2: "",
        verb3: "",
        verb4: "",
        adjective1: "",
        adjective2: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };
    // end handleChange
    
    return (
        <div>
            <h2>MadLibs!!!!</h2>
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="noun1">Noun:</label>
                    <input
                        id="noun1"
                        name="noun1"
                        value={formData.noun1}
                        onChange={handleChange}
                    />
                    <label htmlFor="noun2">Noun:</label>
                    <input
                        id="noun2"
                        name="noun2"
                        value={formData.noun2}
                        onChange={handleChange}
                    />
                    <label htmlFor="noun3">Noun:</label>
                    <input
                        id="noun3"
                        name="noun3"
                        value={formData.noun3}
                        onChange={handleChange}
                    />
                    <label htmlFor="noun4">Noun:</label>
                    <input
                        id="noun4"
                        name="noun4"
                        value={formData.noun4}
                        onChange={handleChange}
                    />

                    <label htmlFor="verb1">Verb:</label>
                    <input
                        id="verb1"
                        name="verb1"
                        value={formData.verb1}
                        onChange={handleChange}
                    />
                    <label htmlFor="verb2">Verb:</label>
                    <input
                        id="verb2"
                        name="verb2"
                        value={formData.verb2}
                        onChange={handleChange}
                    />
                    <label htmlFor="verb3">Verb:</label>
                    <input
                        id="verb3"
                        name="verb3"
                        value={formData.verb3}
                        onChange={handleChange}
                    />
                    <label htmlFor="Verb4">Verb:</label>
                    <input
                        id="verb4"
                        name="verb4"
                        value={formData.verb4}
                        onChange={handleChange}
                    />

                    <label htmlFor="adjective1">Adjective:</label>
                    <input
                        id="adjective1"
                        name="adjective1"
                        value={formData.adjective1}
                        onChange={handleChange}
                    />
                    <label htmlFor="adjective2">Adjective:</label>
                    <input
                        id="adjective2"
                        name="adjective2"
                        value={formData.adjective2}
                        onChange={handleChange}
                    />
                    <button>Lets see what I made!!!</button>
                </form>
            </div>
            <div id="final-paragraph" className="invisible">
                <p>My journey to eliminate the one ring has showed me how to handle {formData.noun1}. Many years have been spent eating {formData.noun2}. The worse part of the trip was when we {formData.verb1}. I wish we would have {formData.verb2} instead. {formData.noun3} and {formData.noun4} have really started to decompose. Times when we {formData.verb3} and {formData.verb4} really make me wish Gandalf were here. His {formData.adjective1} hair and {formData.adjective2} cloak really make me wonder how many eagles he is hogging.</p>
            </div>
        </div>
  );
};
// end

      
export default WordForm;
