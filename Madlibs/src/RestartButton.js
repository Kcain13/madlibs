import React from 'react';

function RestartButton({ onRestart }) {
    return (
        <button onClick={onRestart}>Restart</button>
    );
}

export default RestartButton;
