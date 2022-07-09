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
                <img src={weather}/>
                    <h2>Weather App</h2>
                    
                </div>
                <div className="contac_us">

                    <b>Contact us at :</b> <br/>
                    <strong>Email:</strong> pittasanthoshkumar@gmail.com<br/>
                    <strong>Phone No. :</strong>+919392360255
                    <p><strong>API proviser :</strong> Open Weather API<br/>
                    <strong>LINK:</strong> <a href="https://openweathermap.org/">https://openweathermap.org/</a></p>

                </div>


            </div>
            <div className="footer_second">
                <a href="https://www.facebook.com/profile.php?id=100021659569775"><img src={facebook}/></a>
                <a href="https://www.instagram.com/p_santhosh_kumar_/"><img src={instagram}/></a>
                <a href="https://twitter.com/santhos30910659"><img src={twitter}/></a>
                <a href="https://github.com/santhoshkumar43/"><img src={github}/></a>
                <a href="https://www.linkedin.com/in/santhosh-kumar-pitta-452986201/"><img src={linkedin}/></a>

            </div>

        </div>
    )
}