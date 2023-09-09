import React from 'react';

const Countries = ({countries}) => {
    const {continents,flags, capital,name,currencies,population,coatOfArms


    } = countries;
    console.log(countries)
    return (
        <div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='h-52 w-full' src={flags.png} alt="Shoes" /></figure>
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">
                {name.common}
                <div className="badge badge-secondary ">{capital}</div>
              </h2>
              <div>
              <p>Country: {continents} <span>{currencies?.MWK?.name}</span></p>
              <p>Name Official: {name?.official}</p>
              <p>Population: {population}</p>
              </div>
              <div className="card-actions justify-between items-center">
              <img className='h-16 w-16 rounded-xl' src={coatOfArms?.png} alt="Shoes" />
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Countries;