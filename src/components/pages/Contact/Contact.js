import React from "react";

function Contact() {
  return (
    <div className="bg">
      <main className="container">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <h2>Rob Kellen</h2>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i id="email" className="fa fa-envelope"></i>{" "}
                rob.h.kellen@gmail.com
              </li>
              <br></br>
              <li id="mobile" className="list-group-item">
                <i className="fa fa-mobile"></i> (847) 344-9971
              </li>
              <br></br>
              <li className="list-group-item">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/robkellen"
                  target="_blank"
                >
                  <i id="github" className="fa fa-github"></i>{" "}
                  Github.com/robkellen
                </a>
              </li>
              <br></br>
              <li className="list-group-item">
                <a
                  rel="noopener noreferrer"
                  href="http://linkedin.com/in/robert-kellen-90a3951aa"
                  target="_blank"
                >
                  <i
                    rel="noopener noreferrer"
                    id="github"
                    className="fa fa-linkedin-square"
                  ></i>{" "}
                  Linkedin.com/in/robert-kellen
                </a>
              </li>
              <br></br>
            </ul>
          </div>
          <div className="col-md-8">
            <div className="page-header">
              <h2>Contact</h2>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
