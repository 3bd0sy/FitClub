import React from 'react'
import "./Hero.css"
import Header from '../Header/header'
import hero_image from "../../assets/hero_image.png"
import heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import hero_image_back from "../../assets/hero_image_back.png"
function Hero() {
    return <>
        <div className='hero'>
            <div className=" left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
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
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ex recusandae culpa. Vero placeat, nisi voluptatum amet in aspernatur id illo autem eos. Del
                        </span>
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
                <button className='btn'>Join Now</button>
                <div className="heart-rate">

                    <img src={heart} alt="" className='d-rate' />
                    <span>heart rate</span><span>102 pdm</span>
                </div>

                <img src={hero_image} className='hero-image' alt="" />
                <img src={hero_image_back} className='hero-image_back' alt="" />
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calroies Burned</span>
                        <span>120 kcal</span>

                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Hero