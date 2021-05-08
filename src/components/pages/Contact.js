import React from "react";

function Contact(props) {
  return (
    <div>
    <h4 class="mt-3">Let's Get Connected!</h4>
    <p>
      Catch me on <a href="https://www.linkedin.com/in/brenna-mcleod/" alt="McLeod LinkedIn Link" class="text-light">LinkedIn</a>
      or take a look at my <a href="https://github.com/bmcleod12" alt="McLeod GitHub link" class="text-light">GitHub</a>.
    </p>
    <p>If you're looking for even more, send me your name, email, and a message and I'll have my people get with your people.</p>
    <div class="row px-3">
            <div class="col-xs-12">
              <h5 class="text-light">Name</h5>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Full Name" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  </input>
              </div>
            </div>
          </div>

          <div class="row px-3">
            <div class="col-xs-12">
                <h5 class="text-light">Email</h5>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Email@address.com" aria-label="Recipient's username" aria-describedby="basic-addon2">
                      </input>
                </div>
            </div>
          </div>

          <div class="row px-3">
              <div class="col-xs-12">
                  <h5 class="text-light">Message</h5>
                  <div class="input-group">
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                  </div>
              </div>
          </div>

            <div class="row">
                <div class="col-xs-4 p-4 ms-1">
                    <button type="button" class="btn btn-dark">Submit</button>
                </div>
            </div>
    </div>
  );
}

export default Contact;
