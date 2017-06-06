import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(list => list.main.temp);
    const pressures = cityData.list.map(list => list.main.pressure);
    const humidity = cityData.list.map(list => list.main.humidity);
    const {lon, lat}  = cityData.city.coord;
    //const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td> GoogleMap lon={lon} lat={lat} </td>
        <td> <Chart data={temps} color='red' units="F"/> </td>
        <td> <Chart data={pressures} color='blue' units="hPA"/> </td>
        <td> <Chart data={humidity} color='green' units="%"/> </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
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
