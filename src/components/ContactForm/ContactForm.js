import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";
import "./ContactForm.css";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
// const USER_ID = process.env.REACT_APP_USER_ID;

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  sendMessage(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    let templateParams = {
      from_name: name,
      to_name: SERVICE_ID,
      from_email: email,
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(alert("Your message has been sent!"));

    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  handleInputChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.sendMessage.bind(this)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            name="from_name"
            value={this.state.name}
            onChange={this.handleInputChange.bind(this, "name")}
            required="I would like to be able to know who sent this!  Please enter your name."
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange.bind(this, "email")}
            required="Don't you want me to be able to reply?  Please enter your email address."
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter your message..."
            rows="5"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange.bind(this, "message")}
            required="Please don't leave me hanging!  Enter a message you wish to send."
          ></textarea>
        </div>
        <button id="contact-button" type="submit" className="btn">
          Submit
        </button>
      </Form>
    );
  }
}

export default ContactForm;
