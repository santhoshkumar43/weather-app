import React from "react";
import "./Footer.css";
import weather from "../../images/weather.png";
import facebook from "../../images/facebook.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-first">
                <div className="brand">
                    <img src={weather} />
                    <h2>Weather App</h2>
                    <p><strong>SANTHOSH KUMAR PITTA</strong> </p>
                    <a href="mailto:pittasanthoshkumar4321@gmail.com"><button >Contact me</button></a>

                </div>
                <div>
                    <h2>More Projects</h2>
                    <ul>
                        <li><a href="https://santhosh-portfolio-43.netlify.app/">Portfoio</a></li>
                        <li><a href="https://santhoshkumar43.github.io/calculator/">Calculator</a></li>
                        <li><a href="https://santhoshkumar43.github.io/StudentEnrollmentForm/">student enrollment Form</a></li>
                        <li><a href="https://santhosh-weather-app.netlify.app/">Weather App</a></li>
                    </ul>
                </div>
                <div className="footer_api_details">
                    <h2>API provider</h2>
                    <a href="https://openweathermap.org/"><img  src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png" /></a>
                    <p> <b>Open Weather API</b><br />
                        <strong>Link:</strong> <a href="https://openweathermap.org/">https://openweathermap.org/</a></p>
                </div>
                <div className="contac_us">
                    <h2>Our Social Networks</h2>
                    <p>Join us in the social networks to receive the latest news and updates.</p>
                    

                    <div className="footer_second">
                        
                        <a href="https://www.facebook.com/profile.php?id=100021659569775"><img src={facebook} /></a>
                        <a href="https://www.instagram.com/p_santhosh_kumar_/"><img src={instagram} /></a>
                        <a href="https://twitter.com/santhos30910659"><img src={twitter} /></a>
                        <a href="https://github.com/santhoshkumar43/"><img src={github} /></a>
                        <a href="https://www.linkedin.com/in/santhosh-kumar-pitta-452986201/"><img src={linkedin} /></a>

                    </div>

                </div>

            </div>


        </div>
    )
}