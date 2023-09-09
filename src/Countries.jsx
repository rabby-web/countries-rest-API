import React from 'react';

const Countries = ({countries}) => {
    const {area} = countries;
    console.log(countries)
    return (
        <div>
            <h1>Country: {countries.area}</h1>
            <h2>{area}</h2>
        </div>
    );
};

export default Countries;