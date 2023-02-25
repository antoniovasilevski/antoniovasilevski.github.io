import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
import ReactDOM from "react-dom/client"
import FormComponent from "./FormComponent"


function App() {
  return (
    <div id="body">
      <div className="wrapper">
        <div className="header-container">
          <div className="header">
            <input
              type="button"
              className="about-header"
              value="About"
              onClick={function handleClick(){document.querySelector('.wrapper').scrollIntoView()}}
            />
            <input
              type="button"
              className="projects-header"
              value="Projects"
              onClick={function handleClick(){document.querySelector('.projects').scrollIntoView()}}
            />
            <input
              type="button"
              className="contact-header"
              value="Contact"
              onClick={function handleClick(){document.querySelector('.contact').scrollIntoView()}}
            />
          </div>
        </div>
        <div className="picture">Picture</div>
        <div className="about">
          <div className="about-title">
            <h2>About me</h2>
          </div>
          <div className="about-content">
            Hi there! My name is Antonio. I'm a junior web developer with a
            passion for building great user experiences.
            <br />
            <br />
            For the past 2 years I've had the opportunity to work on a constiety
            of freelance and personal projects while attending university and
            completing a Python developer course.
            <br />
            <br />
            As a developer, I'm always looking to learn and grow. I'm
            comfortable working with a constiety of programming languages and
            frameworks, and always eager to take on new challenges. I'm a strong
            communicator and I believe that great things can happen when a team
            of talented people comes together to work towards a common goal.
            <br />
            <br />
            Thank you for taking the time to learn a little bit about me.
          </div>
        </div>
        <div className="skills-container">
          <div className="javascript-icon">
            <img src="/icons/js.svg" alt="JavaScript" />
            <div>JavaScript</div>
          </div>
          <div className="html-icon">
            <img src="/icons/html5.svg" alt="" />
            <div>HTML</div>
          </div>
          <div className="css-icon">
            <img src="/icons/css3-alt.svg" alt="" />
            <div>CSS</div>
          </div>
          <div className="react-icon">
            <img src="/icons//react.svg" alt="" />
            <div>React</div>
          </div>
          <div className="python-icon">
            <img src="/icons/python.svg" alt="" />
            <div>Python</div>
          </div>
          <div className="flask-icon">
            <img src="/icons/pocoo_flask-icon.svg" alt="" />
            <div>Flask</div>
          </div>
        </div>
        <div className="expirience">Work Expirience</div>
        <div className="projects">Projects</div>
        <div className="contact">
          <div className="contact-me">
            <h2>Get in touch!</h2>
          </div>
          <div className="links-container">
            <a
              href="https://github.com/antoniovasilevski"
              target="_blank"
              className="github-container"
            >
              <img src="/icons/github.svg" alt="" />
              <div className="github">Github</div>
            </a>
            <a
              href="https://www.linkedin.com/in/antonio-vasilevski-60988b266/"
              target="_blank"
              className="linkedin-container"
            >
              <img src="/icons/linkedin.svg" alt="" />
              <div className="linkedin">Linkedin</div>
            </a>
          </div>
          <FormComponent/>
        </div>
      </div>
    </div>
  )
}

export default App
