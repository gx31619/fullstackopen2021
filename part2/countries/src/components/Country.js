import React from 'react'

const Country = ({ ccn3, name, area, capital, languages, flags }) => {


    return (

        <div key={ccn3} >

            <h1>{name.common}</h1>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <h3>Languages:</h3>
            <ul>
                {
                    Object.values(languages).map(language =>

                        <li key={language}>{language}</li>

                    )
                }
            </ul>
            <img width="200" alt="country flag" src={flags}></img>

        </div>
    )
}

export default Country;