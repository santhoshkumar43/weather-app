import React from "react";
import "./Navbar.css"
import weather from "../../images/weather.png"
export default function Navbar() {
    function msg() {
        console.log("helloo")
        document.getElementById("myDropdown").classList.toggle("show");

    }
    window.onclick = function (e) {
        if (!e.target.matches('.dropbtn')) {
            var myDropdown = document.getElementById("myDropdown");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    }
    return (
        <div className="nav-bar" >
            <img src={weather} />
            <h1>Weather App</h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="https://santhosh-portfolio-43.netlify.app/">Portfolio</a></li>
                <li><a href="https://github.com/santhoshkumar43">Github</a></li>
            </ul>
            <div className="drp">
                <button className="dropbtn" onClick={msg} >Menu

                </button>
                <div className="dropdown-content" id="myDropdown">
                    <a href="index.html">Home</a>
                    <a href="https://santhosh-portfolio-43.netlify.app/">Portfolio</a>
                    <a href="https://github.com/santhoshkumar43">Github</a>
                    
                </div>
            </div>


        </div>
    )
}