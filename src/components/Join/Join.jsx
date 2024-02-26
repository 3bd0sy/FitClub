import React from 'react'
import "./Join.css"
const Join = () => {
    return (
        <div className="join">
            <div className="left-j">
                <hr />
                <div>
                    <span className='strok-text'>READY TO </span>
                    <span>LEVEL UP </span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='strok-text'>WITH US? </span>
                </div>
            </div>
            <div className="right-j">
                <form action="" className="email-container">
                    <input type="email" name="user-email" id="" placeholder='enter your email' />
                    <button className='btn btn-j'>join us now</button>
                </form>
            </div> 
        </div>
    )
}

export default Join