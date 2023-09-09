import React from 'react';

const Countries = ({countries}) => {
    const {area,continents,flags} = countries;
    console.log(countries)
    return (
        <div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='h-52 w-full' src={flags.png} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {continents}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
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