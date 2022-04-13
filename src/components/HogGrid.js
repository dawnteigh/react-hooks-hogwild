import React, { useState } from 'react';
import HogCard from './HogCard';

function HogGrid({ hogs }) {

    const [hogsState, setHogsState] = useState(hogs);
    const [greaseCheck, setGreaseCheck] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("default")

    //Greased filter
    function filterGrease() {
        setGreaseCheck(greaseCheck => !greaseCheck);
        greaseCheck ? setHogsState(hogs) : setHogsState(greasedHogs)
    }

    const greasedHogs = hogsState.filter(hog => hog.greased === true)

    //By name sort
    const alphabeticalHogs = hogsState.slice().sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

    //By weight sort

    const hogsLight = hogsState.slice().sort((a, b) => {
        return a.weight - b.weight;
    });

    const hogsHeavy = hogsState.slice().sort((a, b) => {
        return b.weight - a.weight;
    });

    function handleFilterChange(e) {
        setSelectedFilter(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (selectedFilter === "default") {
            setHogsState(hogs)
        }
        else if (selectedFilter === "A-Z") {
            setHogsState(alphabeticalHogs)
        }
        else if (selectedFilter === "Light") {
            setHogsState(hogsLight)
        }
        else if (selectedFilter === "Heavy") {
            setHogsState(hogsHeavy)
        }
    }

    const renderHogs = hogsState.map(hog => {
        return <HogCard
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog["highest medal achieved"]}
            image={hog.image}
        />
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <select name="filter" onChange={handleFilterChange}>
                <option value="default">Sort by...</option>
                <option value="A-Z">Alphabetical</option>
                <option value="Light">Lightest to Heaviest</option>
                <option value="Heavy">Heaviest to Lightest</option>
            </select>
            <button type="submit">Sort</button>
            </form>
            <br></br>
            <input onChange={filterGrease} type="checkbox"></input> Only show greased hogs
            <div class="ui cards">
                {renderHogs}
            </div>
        </div>
    )
}

export default HogGrid;