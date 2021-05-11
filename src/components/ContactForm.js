import React from "react";

function ContactForm() {
    return (
      <div className="container p-3 pb-3 mb-5 mt-3 bg-success">
        <div className="row px-3">
          <div className="col-xs-12"></div>
          <h4 className="mt-3 text-light">Let's Get Connected!</h4>
          <p className="text-light">
            Catch me on <a href="https://www.linkedin.com/in/brenna-mcleod/" alt="McLeod LinkedIn Link" className="text-light">LinkedIn</a> or take a look at my <a href="https://github.com/bmcleod12" alt="McLeod GitHub link" className="text-light">GitHub</a>.
              </p>
          <p className="text-light">If you're looking for even more, send me your name, email, and a message and I'll have my people get with your people.</p>
          <div className="row px-3">
            <div className="col-xs-12">
              <h5 className="text-light">Name</h5>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Full Name" aria-label="Recipient's username" aria-describedby="basic-addon2">
                </input>
              </div>
            </div>
          </div>

          <div className="row px-3">
            <div className="col-xs-12">
              <h5 className="text-light">Email</h5>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Email@address.com" aria-label="Recipient's username" aria-describedby="basic-addon2">
                </input>
              </div>
            </div>
          </div>

          <div className="row px-3">
            <div className="col-xs-12">
              <h5 className="text-light">Message</h5>
              <div className="input-group">
                <textarea className="form-control" aria-label="With textarea"></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4 p-3 ms-1">
              <button type="button" className="btn btn-dark">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContactForm;
