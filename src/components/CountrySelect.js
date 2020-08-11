import React, { Component } from 'react';

class CountrySelect extends Component {
    constructor(props){
        super(props);
        this.state = {
            countries: []
        }
    }

    async componentDidMount() {
        const url = `https://api.covid19api.com/countries`;
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();
        this.setState({
            countries: data
        })
    }

    render() {
        return (
            <div>
                <select onChange={this.props.changeCountry}>
                    {this.state.countries.map((country) => ( // map each country to an option
                        <option value={country.Slug} key={country.Slug}>{country.Country}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default CountrySelect;