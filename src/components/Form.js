import React, { Component } from "react";
import "./Form.css";
import "./Button.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      email: "",
      message: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeSubject(event) {
    this.setState({ subject: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.name);
    console.log("A name was submitted: " + this.state.subject);
    console.log("A name was submitted: " + this.state.email);
    console.log("A name was submitted: " + this.state.message);
    event.preventDefault();
    this.setState({
      name: "",
      subject: "",
      email: "",
      message: "",
    });
  }

  render() {
    return (
      <div className="form-container" ref="form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-element">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              id="name"
              className="form-input"
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </div>
          <div className="form-element">
            <label for="subject" class="form-label">
              Subject
            </label>
            <input
              id="subject"
              className="form-input"
              type="text"
              value={this.state.subject}
              onChange={this.handleChangeSubject}
            />
          </div>
          <div className="form-element">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              id="email"
              className="form-input"
              ref="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className="form-element">
            <label for="message" class="form-label">
              Message
            </label>
            <textarea
              id="message"
              className="form-textarea"
              type="text"
              value={this.state.message}
              onChange={this.handleChangeMessage}
            />
          </div>
          <div className="form-submit">
            <input
              className="btn--outline btn--large"
              type="submit"
              value="SEND"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
