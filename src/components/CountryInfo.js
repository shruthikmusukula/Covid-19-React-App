import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class CountryInfo extends Component {
    constructor(props){
        super(props); // calls constructor of React.Component
        this.state = {
            countryData: null
        }
    }

    // a react hook called when the object is created
    componentDidMount() {
        this.fetchCountryData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.country !== this.props.country) {
            this.fetchCountryData();
        }
    }

    async fetchCountryData() {
        if (this.props.country) {
            const url = `https://api.covid19api.com/total/country/${this.props.country}`;
            const response = await fetch(url); // fetch is an asynchronous function
            if (!response.ok) { // throw Error if response is not right
                throw Error(response.statusText);
            }
            const data = await response.json(); // await creates a javascript "promise"
            this.setState({
                countryData: data[data.length - 1]
            }) // use setState outside of a constructor, use this.state elsewhere
        }
    }

    render() {
        if (!this.state.countryData) {
            return null;
        }

        //JS Destructuring to stop from always typing this.state.CountryData
        const {Country, Confirmed, Deaths, Recovered} = this.state.countryData;

        return (
            // Old Implementation
            /*<div>
                <h3>{Country}</h3>
                <p>Total Cases: {Confirmed}</p>
                <p>Deaths: {Deaths}</p>
                <p>Recovered: {Recovered}</p>
            </div>*/
            <Table className="spaced" striped bordered hover>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Confirmed Cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Country}</td>
                        <td>{Confirmed}</td>
                        <td>{Deaths}</td>
                        <td>{Recovered}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default CountryInfo;