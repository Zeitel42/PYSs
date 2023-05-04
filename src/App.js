import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Gameboard from "./pages/Gameboard/Gameboard";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Gameboard />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
