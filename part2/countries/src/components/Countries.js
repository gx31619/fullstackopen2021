import React, { useState } from 'react';
import Country from './Country';


const Countries = ({ selectedCountry, setSelectedCountry, countries, setCountries, searchCountries }) => {


    const countriesFilter = countries.filter((country) =>
        country.name.common.toUpperCase().includes(searchCountries.toUpperCase()));

    if (countriesFilter.length > 10) {
        return (
            <p>
                Too many matches, specify another filter
            </p>
        )
    } else if ((countriesFilter.length > 2 && countriesFilter.length < 10) || countriesFilter.length === 0) {

        return (
            <ul>
                {
                    countriesFilter
                        .map((country, i) =>
                            <li key={i}>{country.name.common}
                                <button onClick={() => { setCountries([country]) }}>show</button>
                            </li>
                        )}
            </ul>
        )

    } else {
        return (
            countriesFilter.map((country) =>
                <Country
                    key={country.ccn3}
                    name={country.name}
                    capital={country.capital}
                    area={country.area}
                    languages={country.languages}
                    flags={country.flags.svg} />
            )

        )
    }
}




export default Countries;
