import React from "react";
import backgroundImage from "../images/kc-shuffle.jpg"

function Hero() {
    return (
        <div>
        <img src={backgroundImage} alt="We're not in Kansas anymore."></img>
          <div className="col-md-5 p-5 offset-md-7">
            <div className="card bg-gray-600 bg-opacity-60 text-gray-50">
              <div className="card-body">
                <h5 className="card-title text-3xl">Hi, I'm Brenna.</h5>
                <p className="card-text text-5xl py-3">Kansas City-based full stack developer excited to work with you.</p>
                {/* <a href="" className="btn bg-green-800 text-gray-50 my-3">Learn More ></a> */}
              </div>
            </div>
          </div>
      </div>
    );
}

export default Hero;
