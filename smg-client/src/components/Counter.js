import React from 'react';




const Counter = ({ displayTime, displaySec, zero }) => {

    return (
        <div className="counter">
            <p className="timeCountdown">
                {zero(displayTime)}:{zero(displaySec)}
            </p>
        </div>
    );
};

export default Counter;