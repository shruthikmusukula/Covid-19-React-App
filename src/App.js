import React, { Component } from 'react';
import './App.css';
import CountryInfo from './components/CountryInfo';
import CountrySelect from './components/CountrySelect';
import { Container } from 'react-bootstrap';


// Using class Component rather than standard functional Component
class App extends Component {
  state = {
    selectedCountry: null
  }

  // JS Arrow Function, not called immediately
  changeCountry = (country) => {
    this.setState({ // arrow function means this is lexically binded and refers to immediate scope around the function in App
      selectedCountry: country.Slug
    });
  }

  render() {
    return (
      <Container className="App">
        <h1 className="spaced">COVID-19 Data by Country</h1>
        <CountrySelect changeCountry={this.changeCountry}/>
        <CountryInfo country={this.state.selectedCountry}/>
      </Container>
    )
  }
}

export default App;
