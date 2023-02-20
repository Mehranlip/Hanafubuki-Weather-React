import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="row m-0 h-100 d-flex align-items-center justify-content-center ">
        <div className="col-12 col-md-3">
          <div className="box-app">
            {/* input search */}
            <div className="search-box px-3 py-5">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
