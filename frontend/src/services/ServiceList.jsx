import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";




const serviceData = [
    {
        imgUrl: guideImg,
        title:"Best Tour Guide",
        desc:"Connect with experienced local tour guides who can provide personalized tours and insights."
    },
    {
        imgUrl: weatherImg,
        title:"Calculate Weather",
        desc:"Get real-time weather updates for your travel destinations, helping you plan your trips better."
    },
    
    {
        imgUrl: customizationImg,
        title:"Customization",
        desc:"Tailor your travel experiences with customizable itineraries and activities to suit your preferences."
    }
]


const ServiceList = () => {
  return <>
  {
    serviceData.map((item,index)=>(
    <Col lg="3" key = {index}>
        <ServiceCard item = {item}/>
    </Col>)
    )
  }
  </>
}

export default ServiceList
