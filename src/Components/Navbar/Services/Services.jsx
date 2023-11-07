import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { Card } from 'react-bootstrap';


const Services = () => {
  return (
    <div className="services">
        {/* left side*/}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <spane>
                
                Lorem ipsum is simpley dummy text of printing of printing Lorem 
                <br />
                ipsum is  simpley dummy text of printing  
            </spane>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div className="cards">
            <div style={{left :'14rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading= {'Design'}
                detail ={"Figma, Sketch, Photoshop , Adobe, Adobe xd"}
                />
            </div>
            <div style={{top :"12rem", left:"-4rem"}}>
                <Card 
                emoji = {Glasses}
                heading= {"Developer"}
                detail ={"Html, Css, JavaScript , React"}
                />
            </div>
        </div>
    </div>
  )
}

export default Services
