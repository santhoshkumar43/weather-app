import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";


function App() {
  ;

  return (
    <div className="app_container">
      <Navbar/>
      <Homepage />
      <Footer/>
      
    </div>
  );
}

export default App;