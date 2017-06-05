import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    
    //searchTerm
    this.state={term: ''};

    //Have to do this so the function knows what 'this' is tied to
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

//Using this to stop browser from re-rendering after hitting submit
//but it goes to fetch weather data
  onFormSubmit(event) {
    event.preventDefault();
  }
   
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five day forecast in favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}