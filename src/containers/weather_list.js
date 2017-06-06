import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  //This could be (state) *
  return { weather }; //{ weather } === { weather: weather}

  //And this would match up to the (state) -  return { weather: state.weather} *
}

export default connect(mapStateToProps)(WeatherList);
