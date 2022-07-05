import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Aaaa from "./Aaaa";
import Homepage from "./components/Homepage/Homepage";


function App() {

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="app_container">



      
      <Homepage/>
   
      
      

    </div>
  );
}

export default App;