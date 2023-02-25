import React from "react"
import emailjs from "@emailjs/browser"

class FormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      message: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async sendEmailValidationRequest(event) {
    try {
      const response = await fetch(
        "https://emailvalidation.abstractapi.com/v1/?api_key=5bdd6e6ddfcb40cfb420fcb458be6e3a&email=" +
          this.state.email
      )
      const data = await response.json()
      const isValidSMTP = data.is_smtp_valid.value

      if (isValidSMTP) {
        const serviceID = "service_odcq1mb"
        const templateID = "template_yakewic"
        const publicKey = "Lx805kiZho9oomNGf"

        emailjs.sendForm(serviceID, templateID, event.target, publicKey).then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text)
          },
          (error) => {
            console.log("FAILED...", error)
          }
        )
      } else {
        console.log("Invalid email address!")
      }
    } catch (error) {
      throw error
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.sendEmailValidationRequest(event)
  }

  render() {
    return (
      <form id="myForm" onSubmit={this.handleSubmit}>
        <div className="form-group email">
          <input
            value={this.state.email}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="form-group message">
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="8"
            placeholder="Message"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-submit">
          SUBMIT
        </button>
      </form>
    )
  }
}

export default FormComponent
