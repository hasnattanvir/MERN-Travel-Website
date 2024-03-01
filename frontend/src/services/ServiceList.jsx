import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const servicesData =[
    {
        imgUrl:weatherImg,
        title:"Calculate weather",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nostrum eius laborum dolorum"
    },
    {
        imgUrl:guideImg,
        title:"Calculate weather",
        desc:"dignissimos doloremque nam deleniti accusamus, accusantium quod. Quae nesciunt tenetur dolorum sit nobis!"
    },
    {
        imgUrl:customizationImg,
        title:"Calculate weather",
        desc:"esse, aut dignissimos doloremque nam deleniti accusamus, accusantium quod."
    }
]
const ServiceList = () => {
  return (
  <>
    {servicesData.map((item,index)=>(
    <Col lg="3" key={index}>
        <ServiceCard item={item} />
    </Col>
    ))}
  </>
  );
};

export default ServiceList