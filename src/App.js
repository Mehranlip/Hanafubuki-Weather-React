import "./App.css";
import icon_weather from "../src/assets/icon-cloud.png";

function App() {
  return (
    <div className="App">
      <div className="row m-0 h-100 d-flex align-items-center justify-content-center ">
        <div className="col-12 col-md-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
