import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap'; 

function CountrySelect({changeCountry}) {

    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        try{
            const url = `https://api.covid19api.com/countries`;
            const response = await fetch(url);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            setCountries(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCountries()
    }, []); // dependency Array changed

    return (
        // Old Implementation
        /*<div className="spaced">
            <select onChange={changeCountry}>
                {countries.map((country) => ( // map each country to an option
                    <option value={country.Slug} key={country.Slug}>{country.Country}</option>
                ))}
            </select>
        </div>*/
        <Dropdown className="spaced">
            <Dropdown.Toggle>
                Select A Country
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {countries.map((country) => ( // map each country to an option
                    <Dropdown.Item onClick={() => changeCountry(country)}>
                        {country.Country}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CountrySelect;