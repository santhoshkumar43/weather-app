import React, { useEffect } from "react";
import './Homepage.css';
import { useState } from 'react';

export default function Homepage() {
    // Time
    const interval = setInterval(() => {
        const now = new Date();
        const dateTime = now.getHours() + ":" + now.getMinutes();
        console.log(dateTime)
        setdate(dateTime)
    }, 1000);
    // Hooks 

    const [dat, setdat] = useState([30]);
    const [area, setArea] = useState(["Kolkata"]);
    const [climate, setclimate] = useState([]);
    const [feel, setfeel] = useState([]);
    const [wind, setwind] = useState([]);
    const [humidity, sethumidity] = useState([]);
    const [description, setdescription] = useState([]);
    const [contimg, setcontimg] = useState([]);
    const [img, setimg] = useState([]);
    const [date, setdate] = useState([]);
    let d = new Date();
    let timex = d.getHours();
    
    // Api fetch function
    const fetchData = async () => {
        var city = document.getElementById('city').value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city == "" ? "kolkata" : city}&appid=418980fd544d800ef66538c1f8140ef6`);
        const data = await response.json();
        const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const country = `https://countryflagsapi.com/png/${data.sys.country}`;
        setcontimg(country);
        setimg(url);
        setdat(data.main.temp - 273.15);
        setfeel(data.main.feels_like - 273.15);
        setclimate(data.weather[0].main);
        setwind(data.wind.speed);
        sethumidity(data.main.humidity);
        setArea(data.name);
        setdescription(data.weather[0].description);
    };
    window.onload = function() {
        fetchData();
      };


    return (


        <div className="Homepage_container">
            <div style={{ backgroundImage: timex < 17 ? "url('https://s3.envato.com/files/9afcdb91-eea8-4b3a-8571-5b4bfc59bdc9/inline_image_preview.jpg')" : "url('https://wallpaperaccess.com/full/1363028.jpg')" }} className="main">
                <h1 >Weather App</h1>
                <div className="display">
                    <div className="top">
                        <p>Currently</p>
                        <p>{date}</p>
                    </div>
                    <div className="middle-temp">
                        <p>{Math.floor(dat)}<sup>o</sup>C</p>
                        <div>
                            <span>{climate}</span><br />
                            <span>feels like {Math.floor(feel)}</span>
                        </div>
                        <div>
                            <img src={img} />
                        </div>

                    </div>
                    <p>{description}</p>
                    <h2><span >{area}</span><img src={contimg} /> </h2>
                </div>


                <div className="in-out">
                    <input id='city' placeholder='Enter the city' />
                    <button onClick={fetchData} >Search</button>
                </div>



                <div className="bottom">
                    <div>
                        <p>Wind</p>
                        <p>{wind} kmph</p>

                    </div>

                    <div>
                        <p>Humidity</p>
                        <p>{humidity} %</p>

                    </div>

                    <div>
                        <p>
                            climate
                        </p>

                        <p >

                            <img src={img} />
                        </p>

                    </div>

                </div>




            </div>
        </div>
    )
}