import React,{useState} from 'react'
import "./Testimonials.css"
import image1 from "../../assets/t-image1.png";
import image2 from "../../assets/t-image2.jpg";
import image3 from "../../assets/t-image3.jpg";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const testimonialsData = [
        {
            image: image1,
            review:
            "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
            name: 'MATHEW HENDRICKSON',
            status : 'ENTREPRENEUR'
        },
        {
            image: image2,
          review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ',
          name: 'JOHN KEVIN',
          status: 'COACH'
        },
        {
            image : image3,
            review:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
          name: 'FRANKLIN',
          status: "CUSTOMER"
        }
    ];

    const len=testimonialsData.length;

  return (
  <div className="testimonials">
    <div className="left-t">
        <span>testimonials</span>
        <span className='strok-text'>what they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
            <span style={{color:"tomato"}}>{testimonialsData[selected].name} </span>
            - {testimonialsData[selected].status}
        </span>
    </div>
    <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
<div className="arrows">
    <img src={leftArrow}
    onClick={()=>{
        selected===0?
        setSelected(len-1):
        setSelected((p)=>p-1)
    }} alt="" />
    <img src={rightArrow}  onClick={()=>{
        selected===len-1?
        setSelected(0):
        setSelected((p)=>p+1)
    }}
    alt="" />
</div>
    </div>
  </div>
  )
}

export default Testimonials