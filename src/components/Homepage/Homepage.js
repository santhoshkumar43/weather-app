import React from "react";
import './Homepage.css';
import { useState } from 'react';

export default function Homepage() {

    const [dat, setdat] = useState([30]);
    const [area, setArea] = useState(["sompeta"]);
    const [climate, setclimate] = useState([]);
    const [feel, setfeel] = useState([]);
    const [wind, setwind] = useState([]);
    const [humidity, sethumidity] = useState([]);
    const [icon, seticon] = useState([]);
    const [img, setimg] = useState([]);
    const [place, setplace] = useState([]);
    let d = new Date();
    let timex = d.getHours();
    var time = d.getHours() + ":" + d.getMinutes() ;
    console.log(time);









    const fetchData = async () => {
        
        var city = document.getElementById('city').value;
        
        
        console.log(city);


        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=418980fd544d800ef66538c1f8140ef6`);
        const data = await response.json();
        const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        seticon(data.weather[0].icon);
        setimg(url)

        setdat(data.main.temp - 273.15);
        setfeel(data.main.feels_like-273.15);
        console.log(feel)
        
        setclimate(data.weather[0].main);
        setwind(data.wind.speed);
        sethumidity(data.main.humidity)
        console.log(data)
        setArea(data.name)
        console.log(icon)



    };
    window.onload = fetchData();
    console.log(dat)
    return (


        <div className="Homepage_container">
            <div style={{backgroundImage:timex < 17 ?  "url('https://s3.envato.com/files/9afcdb91-eea8-4b3a-8571-5b4bfc59bdc9/inline_image_preview.jpg')" : "url('https://wallpaperaccess.com/full/1363028.jpg')" }} className="main">
                <h1 >Weather App</h1>
                <div className="display">
                    <div className="top">
                        <p>Currently</p>
                        <p>{time}</p>
                    </div>
                    <div className="middle-temp">
                        <p>{Math.floor(dat)} C</p>
                        <div>
                            <span>{climate}</span><br />
                            <span>feels like {Math.floor(feel)}</span>
                        </div>
                        <div>
                        <img src={img} />

                        </div>

                    </div>
                    <h2><span >{area}</span> </h2>
                </div>


                <div className="in-out">
                    <input id='city' placeholder='Enter the city' />
                    <button onClick={fetchData} >Search</button>
                </div>



                <div className="bottom">
                    <div>
                        <p>Wind</p>
                        <p>{wind}</p>

                    </div>

                    <div>
                        <p>Humidity</p>
                        <p>{humidity}</p>

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