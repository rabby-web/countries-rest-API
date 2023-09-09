import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Countries from './Countries'

function App() {
  const [countries, setCountries] = useState()
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-semibold text-center'>Countries</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            countries.map(countries => <Countries countries={countries}></Countries>)
          }
        </div>
      </div>
    </>
  )
}

export default App
