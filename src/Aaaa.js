import React, { useState } from 'react';
import { useEffect } from 'react';
import Homepage from './components/Homepage/Homepage';

function Aaaa() {
    // Declare a new state variable, which we'll call "count"
    const [dat, setdat] = useState([]);
    const [area, setArea] = useState(["sompeta"]);
    const [num, setnum] = useState(0);






    const fetchData = async () => {
        
        var city = document.getElementById('city').value;
        console.log(city)
        

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city =' '? area : city  }&appid=418980fd544d800ef66538c1f8140ef6`);
        const data = await response.json();
        setdat(data.main.temp - 273.15);
        setArea(city)
        


    };
    console.log(dat)
    





    return (
        <div>

            <Homepage
            temprature ={dat}
            cityName ={area}
            
            />
            <p>temprature {dat} C {area} </p>

            <input id='city' placeholder='enter city' required/>
            <button onClick={fetchData}>jhdbchdbchbd</button>





        </div>
    );
}
export default Aaaa;