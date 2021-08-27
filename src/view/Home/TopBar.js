import React from 'react';
import { useSelector  } from 'react-redux';

const TopBar = () => {
    const world_population = useSelector(state => state.system.world_population);

    return (
        <div>
            <div>World population: {world_population.world_population}</div>
            <div>Total Countries: {world_population.total_countries}</div>
        </div>
    )
}

export default TopBar;