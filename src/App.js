import "./App.css";
import icon_weather from "../src/assets/icon-cloud.png";
import cloud_drizzle from "../src/assets/icon-sideBar/cloud-drizzle.svg";
import activity from "../src/assets/icon-sideBar/activity.svg";
import layout from "../src/assets/icon-sideBar/layout.svg";
import map_pin from "../src/assets/icon-sideBar/map-pin.svg";

function App() {
  return (
    <div className="App">
      <div className="row m-0 h-100 d-flex align-items-center justify-content-center  ">
        <div className="col-12 col-md-6 col-lg-3 mt-3 mb-3">
          <div className="box-app">
            {/* input search */}
            <div className="search-box px-3 py-4">
              <input placeholder="Search" type="text" />
            </div>
            {/* end input search */}
            {/* city name and date section */}
            <div className="row">
              <div className="col-12 text-center name-city">Accra, Ghana</div>
            </div>
            <div className="row">
              <div className="col-12 text-center date">22-Sep-22</div>
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
                      <div className="col-12 main-weather-range">20°</div>
                    </div>
                    <div className="row text-start">
                      <div className="col-12 Real-feel">Real feel: 20</div>
                    </div>
                  </div>
                  {/* end show main weather data */}
                  {/* icon weather */}
                  <div className=" col-6">
                    <div className="row">
                      <div className=" icon-weather">
                        <img
                          className="mx-auto d-block"
                          src={icon_weather}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="weather-status">Cloudy</div>
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
                <p>UV Index</p>
                <p>Humidity</p>
                <p>Wind Speed</p>
                <p>Rain Probability</p>
                <p>Pressure</p>
              </div>
              <div className="col-6 description-meta-data ">
                <p>1.0</p>
                <p>55</p>
                <p>5.00 mph</p>
                <p>30%</p>
                <p>1023.1 pa</p>
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
