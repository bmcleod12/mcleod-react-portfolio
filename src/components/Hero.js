import React from "react";
import backgroundImage from "../images/kc-shuffle.jpg"

function Hero() {
    return (
        <div className="pt-5"
         style={{
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: "cover",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            height: "60rem"
        }}>
            <div className="col-md-5 p-5 offset-md-7">
                <div className="card bg-dark text-light">
                    <div className="card-body bg-gray text-gray-50">
                        <h3 className="card-title">Hi, I'm Brenna.</h3>
                        <h1 className="card-text text-5xl py-3">Kansas City-based full stack developer excited to work with you.</h1>
                        {/* <a href="" className="btn bg-green-800 text-gray-50 my-3">Learn More ></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
