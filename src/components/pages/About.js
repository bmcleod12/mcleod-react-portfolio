import React from "react";

function About() {
  return (
    <div>
      <div className="row my-4 bg-success">
        <div className="container pb-5 mb-2 mt-3">
          <div className="row-fluid text-light">
            <div className="col-sm-4">
              <img src="assets\images\mcleod.PNG" className="float-start img-fluid p-3 bg-success" alt="Brenna McLeod smiling on a hike in Kentucky"></img>
            </div>

            <div className="col-sm-12 p-3"></div>
            <h1>About</h1>
            <div className="col-sm-12 p-3">
              <p className="text-2xl">
                Brenna McLeod is a new developer actively learning and growing in the field. Years of experience consulting and configuring business software has taught her about life as a software user; now it's time to go behind the scenes and write the software herself.
                </p>
              <p className="text-2xl pt-3">
                She is proficient with the following:
                </p>
              <p className="pt-2 text-xl">Languages:</p>
              <p className="text-xl"><span className="badge bg-light text-dark">HTML</span>
                <span className="badge bg-light text-dark">CSS</span>
                <span className="badge bg-light text-dark">JavaScript</span>
                <span className="badge bg-light text-dark">MySQL</span>
                <span className="badge bg-light text-dark">MongoDB</span>
              </p>
              <p className="pt-2 text-xl">Development Tools:</p>
              <p className="text-xl"><span className="badge bg-light text-dark">jQuery</span>
                <span className="badge bg-light text-dark">Bootstrap</span>
                <span className="badge bg-light text-dark">Tailwindcss</span>
                <span className="badge bg-light text-dark">Handlebars</span>
                <span className="badge bg-light text-dark">Github</span>
                <span className="badge bg-light text-dark">Gitlab</span>
                <span className="badge bg-light text-dark">Mongoose</span>
                <span className="badge bg-light text-dark">Node.js</span>
                <span className="badge bg-light text-dark">React</span>
              </p>
              <p className="text-2xl pt-5">
                With plans to learn:
                </p>
              <p className="text-xl">
                <span className="badge bg-light text-dark">Java</span>
                <span className="badge bg-light text-dark">Android Development</span>
              </p>
              <p className="text-2xl pt-5">
                Want to see more? Grab a copy of my <a className="underline" href="assets\McLeod_Resume 2021.pdf" target="_blank" alt="McLeod Resume" >Resume</a> and drop me a line.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
