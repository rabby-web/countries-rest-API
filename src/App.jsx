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
      <div>
        <h1>Hello {countries.length}</h1>
        <div>
          {
            countries.map(countries => <Countries countries={countries}></Countries>)
          }
        </div>
      </div>
    </>
  )
}

export default App
