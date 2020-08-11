import React, { Component } from 'react';
import './App.css';
import CountryInfo from './components/CountryInfo'
import CountrySelect from './components/CountrySelect'

// Using class Component rather than standard functional Component
class App extends Component {
  state = {
    selectedCountry: "united-states"
  }

  // JS Arrow Function, not called immediately
  changeCountry = (e) => {
    this.setState({ // arrow function means this is lexically binded and refers to immediate scope around the function in App
      selectedCountry: e.target.value
    });
  }

  render() {
    return (
      <div class="App">
        <h1>COVID-19 Data by Country</h1>
        <CountrySelect changeCountry={this.changeCountry}/>
        <CountryInfo country={this.state.selectedCountry}/>
      </div>
    )
  }
}

export default App;
