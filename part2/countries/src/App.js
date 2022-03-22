import { useState } from 'react';
import SearchCountries from './components/SearchCountries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState([]);

  return (
    <div>
      <SearchCountries searchCountries={searchCountries} setSearchCountries={setSearchCountries} />
    </div>
  )
}

export default App;
