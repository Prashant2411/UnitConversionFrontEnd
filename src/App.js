import React from "react";
import "./App.css";
import ButtonAppBar from "./comp/Topbar";
import UnitTypes from './comp/UnitType'

function App() {
  return (
    <body>
      <div>
        <ButtonAppBar/>
      </div>
      <div>
      <div id="App">
          <UnitTypes/>
        </div>
      </div>
    </body>
  );
}

export default App;
