import { useState } from "react";
import axios from "axios";

import "./App.css";
import cloud_drizzle from "../src/assets/icon-sideBar/cloud-drizzle.svg";
import activity from "../src/assets/icon-sideBar/activity.svg";
import layout from "../src/assets/icon-sideBar/layout.svg";
import map_pin from "../src/assets/icon-sideBar/map-pin.svg";

// import weather icon status
import Clear from "../src/assets/icon-weather/Clear.svg";
import Clouds from "../src/assets/icon-weather/Clouds.svg";
import Drizzle from "../src/assets/icon-weather/Drizzle.svg";
import Rain from "../src/assets/icon-weather/Rain.svg";
import snow from "../src/assets/icon-weather/snow.svg";
import Thunderstorm from "../src/assets/icon-weather/Thunderstorm.svg";

function App() {
  const [data, setdata] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8e826b363bd41c64db8fc0d54f013717`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  // change weather icon status

  return (
    <div className="App">
      <div className="row m-0 h-100 d-flex align-items-center justify-content-center  ">
        <div className="col-12 col-md-6 col-lg-3 mt-3 mb-3">
          <div className="box-app">
            {/* input search */}
            <div className="search-box px-3 py-4">
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Search"
                type="text"
              />
            </div>
            {/* end input search */}
            {/* city name and date section */}
            <div className="row">
              <div className="col-12 text-center name-city">
                {data.name ? <span>{data.name}</span> : "Arak"}
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center date">
                {data.sys ? <span>{data.sys.country}</span> : "IR"}
              </div>
            </div>
            {/* end city name and data section */}
            {/* box show weather  */}
            <div className="row px-4 py-3 ">
              <div className="col-12 box-show-weather p-3  ">
                <div className="row align-items-center justify-content-center">
                  {/* show main weather data */}
                  <div className=" col-6">
                    <div className="row text-start">
                      <div className="col-12 TEMPERATURE">TEMPERATURE</div>
                    </div>
                    <div className="row text-start">
                      <div className="col-12 main-weather-range">
                        {" "}
                        {data.main ? (
                          <span>{data.main.temp.toFixed()}°F</span>
                        ) : (
                          "28°F"
                        )}
                      </div>
                    </div>
                    <div className="row text-start">
                      <div className="col-12 Real-feel">
                        Feels Like:{" "}
                        {data.main ? <span>{data.main.feels_like}</span> : "25"}
                      </div>
                    </div>
                  </div>
                  {/* end show main weather data */}
                  {/* icon weather */}
                  <div className=" col-6">
                    <div className="row">
                      <div className=" icon-weather">
                        <img className="mx-auto d-block" src={Clouds} alt="" />
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="weather-status">
                        {data.main ? (
                          <span>{data.weather[0].main}</span>
                        ) : (
                          "Cloudy"
                        )}
                      </div>
                    </div>
                  </div>
                  {/* end icon weather */}
                </div>
              </div>
            </div>
            {/* end box show weather */}
            {/* section meta data weather */}
            <div className="row px-4 py-3 mt-3">
              <div className="col-6 title-meta-data ">
                <p>Temp Max</p>
                <p>Humidity</p>
                <p>Wind Speed</p>
                <p>wind Deg</p>
                <p>Pressure</p>
              </div>
              <div className="col-6 description-meta-data ">
                <p>{data.main ? <span>{data.main.temp_max}</span> : "29"}</p>
                <p>{data.main ? <span>{data.main.humidity}</span> : "51"}</p>
                <p>{data.main ? <span>{data.wind.speed}</span> : "81"} mph</p>
                <p>{data.main ? <span>{data.wind.deg}</span> : "52"}</p>
                <p>{data.main ? <span>{data.main.pressure}</span> : "1023"}</p>
              </div>
            </div>
            {/* end section meta data weather */}
            {/* side bar */}
            <div className="row align-items-center justify-content-center box-sidebar px-2 py-3 mx-3 mt-5  ">
              <div className="col-3 ">
                <img className="mx-auto d-block" src={cloud_drizzle} alt="" />
              </div>
              <div className="col-3 ">
                <img className="mx-auto d-block" src={activity} alt="" />
              </div>
              <div className="col-3 ">
                <img className="mx-auto d-block" src={layout} alt="" />
              </div>
              <div className="col-3 ">
                <img className="mx-auto d-block" src={map_pin} alt="" />
              </div>
            </div>
            <br />
            {/* end side bar */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
