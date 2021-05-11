import React from "react";
import mcleod from "../images/mcleod.PNG";

function AboutInfo() {
    return (
        <div className="row bg-success">
        <div className="container pb-5 mb-2 mt-3">
          <div className="row-fluid text-light">
            <div className="col-sm-4">
              <img src={mcleod} className="float-start img-fluid p-3 bg-success" alt="Brenna McLeod smiling on a hike in Kentucky"></img>
            </div>

            <div className="col-sm-12 p-3"></div>
            <h1>About</h1>
            <div className="col-sm-12 p-3">
              <h4>
                Brenna McLeod is a new developer actively learning and growing in the field. Years of experience consulting and configuring business software has taught her about life as a software user; now it's time to go behind the scenes and write the software herself.
                </h4>
              <h4>
                She is proficient with the following:
                </h4>
              <h5 className="pt-2">Languages:</h5>
              <p>
                <span className="badge bg-light text-dark m-1">HTML</span>
                <span className="badge bg-light text-dark m-1">CSS</span>
                <span className="badge bg-light text-dark m-1">JavaScript</span>
                <span className="badge bg-light text-dark m-1">MySQL</span>
                <span className="badge bg-light text-dark m-1">MongoDB</span>
              </p>
              <h5 className="pt-2">Development Tools:</h5>
              <p>
                <span className="badge bg-light text-dark m-1">jQuery</span>
                <span className="badge bg-light text-dark m-1">Bootstrap</span>
                <span className="badge bg-light text-dark m-1">Tailwindcss</span>
                <span className="badge bg-light text-dark m-1">Handlebars</span>
                <span className="badge bg-light text-dark m-1">Github</span>
                <span className="badge bg-light text-dark m-1">Gitlab</span>
                <span className="badge bg-light text-dark m-1">Mongoose</span>
                <span className="badge bg-light text-dark m-1">Node.js</span>
                <span className="badge bg-light text-dark m-1">React</span>
              </p>
              <h5 className="pt-2">
                With plans to learn:
                </h5>
              <p>
                <span className="badge bg-light text-dark m-1">Java</span>
                <span className="badge bg-light text-dark m-1">Android Development</span>
              </p>
              <h5 className="pt-3">
                Want to see more? Grab a copy of my <a className="underline text-light" href="assets\McLeod_Resume 2021.pdf" target="_blank" alt="McLeod Resume" >Resume</a> and drop me a line.
                </h5>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutInfo;
