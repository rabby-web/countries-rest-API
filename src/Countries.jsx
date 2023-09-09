import React from 'react';

const Countries = ({countries}) => {
    const {continents,flags, capital,name} = countries;
    console.log(countries)
    return (
        <div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='h-52 w-full' src={flags.png} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">
                {continents}
                <div className="badge badge-secondary">{capital}</div>
              </h2>
              <p>{name.common}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Countries;