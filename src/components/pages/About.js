import React from "react";

function About() {
  return (
    <div>
      <h1>About</h1>
      <div class="col-sm-12 p-3">
                <p class="text-2xl">
                  Brenna McLeod is a new developer actively learning and growing in the field. Years of experience consulting and configuring business software has taught her about life as a software user; now it's time to go behind the scenes and write the software herself.
                </p>
                <p class="text-2xl pt-3">
                  She is proficient with the following:
                </p>
                <p class="pt-2 text-xl">Languages:</p>
                  <p class="text-xl"><span class="badge bg-light text-dark">HTML</span> 
                    <span class="badge bg-light text-dark">CSS</span> 
                    <span class="badge bg-light text-dark">JavaScript</span>
                    <span class="badge bg-light text-dark">MySQL</span> 
                    <span class="badge bg-light text-dark">MongoDB</span>
                  </p>
                <p class="pt-2 text-xl">Development Tools:</p>
                  <p class="text-xl"><span class="badge bg-light text-dark">jQuery</span> 
                    <span class="badge bg-light text-dark">Bootstrap</span> 
                    <span class="badge bg-light text-dark">Tailwindcss</span>
                    <span class="badge bg-light text-dark">Handlebars</span>
                    <span class="badge bg-light text-dark">Github</span>
                    <span class="badge bg-light text-dark">Gitlab</span>
                    <span class="badge bg-light text-dark">Mongoose</span>
                    <span class="badge bg-light text-dark">Node.js</span> 
                    <span class="badge bg-light text-dark">React</span>
                  </p>
                <p class="text-2xl pt-5">
                  With plans to learn:
                </p>
                  <p class="text-xl">
                    <span class="badge bg-light text-dark">Java</span>
                    <span class="badge bg-light text-dark">Android Development</span>
                  </p>
                <p class="text-2xl pt-5">
                  Want to see more? Grab a copy of my <a class="underline" href="assets\McLeod_Resume 2021.pdf" target="_blank" alt="McLeod Resume" >Resume</a> and drop me a line.
                </p>
              </div>
    </div>
  );
}

export default About;
