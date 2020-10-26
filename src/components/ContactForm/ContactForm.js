import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";

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
      to_name: "service_yak3rdl",
      from_email: email,
      message: message,
    };

    emailjs.send(
      "service_yak3rdl",
      "template_vqw5wrf",
      templateParams,
      "user_ycWISB282COpelEg2Suw2"
    ).then(alert("Your message has been sent!"));

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
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            name="from_name"
            value={this.state.name}
            onChange={this.handleInputChange.bind(this, "name")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange.bind(this, "email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Message"
            rows="5"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange.bind(this, "message")}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    );
  }
}

export default ContactForm;
