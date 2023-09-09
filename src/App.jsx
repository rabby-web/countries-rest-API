import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [country, setCountry] = useState()
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  },[])

  return (
    <>
      <div>
        <h2 className='text-center font-bold text-3xl'>Countries {country.length}</h2>
      </div>
    </>
  )
}

export default App
