import React, { useEffect } from "react";
import './Homepage.css';
import { useState } from 'react';
import Forcast from "../Forcast/Forcast";
import data from "../../city.json";
import search from "../../images/search.png"

export default function Homepage() {
    // Time
    const [date, setdate] = useState([]);
    const interval = setInterval(() => {
        const now = new Date();
        const dateTime = now.getHours() + ":" + now.getMinutes();

        setdate(dateTime);
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

    const [forcast, setforcast] = useState([]);
    let d = new Date();
    let timex = d.getHours();
    

    const [fore, setfore] = useState([]);



    // Api fetch function

    const fetchData = async () => {
        // weather of current day
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value == "" ? "kolkata" : value}&appid=418980fd544d800ef66538c1f8140ef6`);
        const data = await response.json();
        const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const country = `https://countryflagsapi.com/png/${data.sys.country}`;
        setforcast(data.list)
        setcontimg(country);
        setimg(url);
        setdat(data.main.temp - 273.15);
        setfeel(data.main.feels_like - 273.15);
        setclimate(data.weather[0].main);
        setwind(data.wind.speed);
        sethumidity(data.main.humidity);
        setArea(data.name);
        setdescription(data.weather[0].description);


        // forcast
        const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value == "" ? "kolkata" : value}&appid=418980fd544d800ef66538c1f8140ef6`)
        const newData = await result.json();
        
        setfore(newData.list)




    };
    window.onload = function () {
        fetchData();

    };

    const [value, setvalue] = useState('');
    const onChange = (event) => {
        setvalue(event.target.value);
    }
    const onSearch = (searchTerm) => {
        // this for to call fetchdata only if we click search 
        if (value.length == searchTerm.length) {
            fetchData();


        }


        setvalue(searchTerm);
        //api

    }


    return (


        <div className="Homepage_container">
            <div style={{ backgroundImage: timex < 18 ? "url('https://s3.envato.com/files/9afcdb91-eea8-4b3a-8571-5b4bfc59bdc9/inline_image_preview.jpg')" : "url('https://wallpaperaccess.com/full/1363028.jpg')" }} className="main">
                <h1 >Weather App</h1>
                <div className="display">
                    <div className="top">
                        <p>Currently</p>
                        <p>{date}</p>
                    </div>
                    <div className="middle-temp">
                        <p>{Math.floor(dat)}<sup>o</sup><span style={{ fontWeight: "normal" }}>c</span></p>
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


                <div className="in">
                    <div className="in-out">
                        <input value={value} onChange={onChange} placeholder="Enter your City" />
                        <button onClick={() => onSearch(value)}><img src={search} tabindex="-1"/></button>

                    </div>
                    <div className="in-2">
                        <div className="dataSearch">
                            {
                                data.filter(item => {
                                    const searchTerm = value.toLowerCase();

                                    const name = item.name.toLowerCase();
                                    if (searchTerm.length > 2) { return searchTerm && name.startsWith(searchTerm) && name !== searchTerm; }

                                }).slice(0, 5)
                                    .map((item, index) => (
                                        <div onClick={() => onSearch(item.name)} key={item.id}>  {item.name}, {item.country}  </div>
                                    ))

                            }

                        </div>
                    </div>
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
                <div className="forecast">
                    {
                        fore.map((cast) => {
                            return (

                                <Forcast date={cast.dt_txt.slice(0,11)} time={cast.dt_txt.slice(10,16)} temp2={Math.floor(cast.main.temp-273.15)} weather={cast.weather[0].main} image={cast.weather[0].icon}/>
                            )


                        })
                    }

                </div>




            </div>
        </div>
    )
}