import React from 'react'
import "./Hero.css"
import Header from '../Header/header'
import hero_image from "../../assets/hero_image.png"
import heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import hero_image_back from "../../assets/hero_image_back.png"
import {motion} from "framer-motion"
function Hero() {
    const transition={type:"spring",duration:3}
    return <>
        <div className='hero' id="home">
            <div className="blur hero-blur"></div>
            <div className="blur hero-blur-r"></div>
            <div className=" left-h">
                <Header />
                <div className="the-best-ad">
                <motion.div
                    initial={{left:"240px"}}
                    whileInView={{left:"10px"}}
                    transition={transition}></motion.div>
                    <span>the best fitness club in the world</span>
                </div>



                <div className="hero-text">
                    <span>
                        <span className='strok-text'>Shape </span>
                        <span>Your</span>
                    </span>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div className='text-hh'>
                        <span>in here we will help you to shape and build your ideal body and live up your life to fuulest                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>export coachs</span>
                    </div>
                    <div>
                        <span>+ 987</span>
                        <span>member joined</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>fitness programes</span>
                    </div>
                </div>


                <div className="hero-buttons">
                    <div className="btn">Get Started</div>
                    <div className="btn">Learn More</div>
                </div>
            </div>
            <div className="right-h">
                <button className='btn hero-btn'>Join Now</button>
                <motion.div 
                initial={{right:"-20px"}}
                whileInView={{right:"50px"}}
                transition={transition}
                className="heart-rate">

                    <img src={heart} alt="" className='d-rate' />
                    <span>heart rate</span><span>102 pdm</span>
                </motion.div>

                <img src={hero_image} className='hero-image' alt="" />
                <img src={hero_image_back} className='hero-image_back' alt="" />
                <motion.div 
                 initial={{right:"700px"}}
                 whileInView={{right:"550px"}}
                 transition={transition}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calroies Burned</span>
                        <span>120 kcal</span>

                    </div>
                </motion.div>
            </div>

        </div>
    </>
}

export default Hero