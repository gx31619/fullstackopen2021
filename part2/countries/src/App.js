import { useState, useEffect } from 'react';
import SearchCountries from './components/SearchCountries';
import Countries from './components/Countries';
import axios from 'axios';


const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(true);
  useEffect(() => {

    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data);
        setCountries(response.data);
      })
  }, [selectedCountry]);


  return (
    <div>
      <SearchCountries searchCountries={searchCountries} setSearchCountries={setSearchCountries} />
      <Countries countries={countries} setCountries={setCountries} searchCountries={searchCountries} setSelectedCountry={setSelectedCountry} />

    </div>
  )
}

export default App;
