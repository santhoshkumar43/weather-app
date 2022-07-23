import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Forcast({ temp2,date,time,weather,image }) {
    
    
    
    
    return (
        <div>
            <p><span>{date}</span></p>
            <p>{time}</p>
            <p>{temp2}<sup>o</sup> C</p>
            <p>{weather}</p>
            <img src={`https://openweathermap.org/img/wn/${image}@2x.png`}/>
            
        </div>
    )

}
