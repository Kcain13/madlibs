import React, { useState, useEffect } from 'react';

function MadlibForm({ onSubmit, selectedStory }) {
    const [inputs, setInputs] = useState({
        noun1: '',
        adjective1: '',
        verb: '',
        noun2: '',
        adjective2: ''
    });

    useEffect(() => {
        // Reset the form inputs when a new story template is selected
        setInputs({
            noun1: '',
            adjective1: '',
            verb: '',
            noun2: '',
            adjective2: ''
        });
    }, [selectedStory]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Only submit if all fields are filled
        if (Object.values(inputs).every(input => input.trim() !== '')) {
            onSubmit(inputs);
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Noun 1:
                <input
                    name="noun1"
                    value={inputs.noun1}
                    onChange={handleChange}
                    placeholder="Enter a noun"
                    required
                />
            </label>
            <br />
            <label>
                Adjective 1:
                <input
                    name="adjective1"
                    value={inputs.adjective1}
                    onChange={handleChange}
                    placeholder="Enter an adjective"
                    required
                />
            </label>
            <br />
            <label>
                Verb:
                <input
                    name="verb"
                    value={inputs.verb}
                    onChange={handleChange}
                    placeholder="Enter a verb"
                    required
                />
            </label>
            <br />
            <label>
                Noun 2:
                <input
                    name="noun2"
                    value={inputs.noun2}
                    onChange={handleChange}
                    placeholder="Enter another noun"
                    required
                />
            </label>
            <br />
            <label>
                Adjective 2:
                <input
                    name="adjective2"
                    value={inputs.adjective2}
                    onChange={handleChange}
                    placeholder="Enter another adjective"
                    required
                />
            </label>
            <br />
            <button type="submit">Create Story</button>
        </form>
    );
}

export default MadlibForm;
