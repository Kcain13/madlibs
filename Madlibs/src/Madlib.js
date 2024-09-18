import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';
import RestartButton from './RestartButton';

function Madlib() {
    const [story, setStory] = useState(null);
    const [selectedStory, setSelectedStory] = useState('story1'); // Track which story template is selected

    const handleFormSubmit = (inputs) => {
        // Story templates based on the selected story
        const stories = {
            story1: `Once upon a time, there was a ${inputs.adjective1} ${inputs.noun1} who loved to ${inputs.verb}. 
      One day, it met a ${inputs.adjective2} ${inputs.noun2} and they became best friends.`,

            story2: `In a galaxy far away, there lived a ${inputs.adjective1} ${inputs.noun1}. 
      This ${inputs.noun1} was always ${inputs.verb} until one day, it found a ${inputs.adjective2} ${inputs.noun2}. They embarked on an adventure together.`,

            story3: `In the middle of a dark forest, a ${inputs.adjective1} ${inputs.noun1} was searching for something to ${inputs.verb}. 
      It stumbled upon a ${inputs.adjective2} ${inputs.noun2}, and their fates became intertwined forever.`
        };

        // Set the story using the selected template
        setStory(stories[selectedStory]);
    };

    const handleRestart = () => {
        setStory(null); // Reset the story to go back to the form
    };

    const handleStorySelect = (e) => {
        setSelectedStory(e.target.value); // Update the selected story when the user picks a different option
    };

    return (
        <div className="container">
            {!story && (
                <div className="story-container">
                    <label htmlFor="storySelect" className="story-label"> Choose a story template: </label>
                    <select
                        id="storySelect"
                        value={selectedStory}
                        onChange={handleStorySelect}
                        className="story-template"
                    >
                        <option value="story1">Story 1: A Tale of Friendship</option>
                        <option value="story2">Story 2: Space Adventure</option>
                        <option value="story3">Story 3: Forest Mystery</option>
                    </select>
                </div>
            )}

            {story ? (
                <>
                    <MadlibStory story={story} />
                    <RestartButton onRestart={handleRestart} />
                </>
            ) : (
                <MadlibForm onSubmit={handleFormSubmit} />
            )}
        </div>
    );
}

export default Madlib;
