import React, { useState } from 'react';

function HogCard({ name, specialty, greased, weight, medal, image }) {

    const [isClicked, setIsClicked] = useState(false)
    const display = isClicked ? "block" : "none"
    function toggleInfo() {
        setIsClicked(isClicked => !isClicked)
    }
    return (
    <div onClick={toggleInfo} class="card">
        <div class="image">
            <img src={image} alt={name}></img>
        </div>
        <div class="content">
            <h2 class="header">{name}</h2>
            <div style={{ display: display }}class="meta">
                <span class="date">Greased? {greased ? "Yes!" : "No."} | Weight: {weight}</span>
            </div>
            <div class="description" style={{ display: display }}>
                {name} is good at {specialty.toLowerCase()}. {name}'s highest medal to date is {medal}.
            </div>
        </div>
    </div>)
}

export default HogCard;