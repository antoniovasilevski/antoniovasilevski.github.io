import Education from "./components/EducationComponent"
import FormComponent from "./components/FormComponent"
import Project from "./components/ProjectComponent"

function App() {
  window.onload = function () {
    checkPosition()
  }

  window.addEventListener("scroll", function () {
    checkPosition()
  })

  function checkPosition() {
    const slidingEl = document.querySelector(".sliding")

    const aboutEl = document.querySelector(".about")
    const educationEl = document.querySelector(".education")
    const projectsEl = document.querySelector(".project-container")
    const contactEl = document.querySelector(".contact")

    if (isInViewport(aboutEl) || isInViewport(educationEl)) {
      slidingEl.style = "transform: translateX(+0%)"
    } else if (isInViewport(projectsEl)) {
      slidingEl.style = "transform: translateX(+102%)"
    } else if (isInViewport(contactEl)) {
      slidingEl.style = "transform: translateX(+204%)"
    }
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 - 100 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) + 200
    )
  }

  return (
    <div id="container">
      <div className="wrapper">
        <div className="header-container">
          <div className="header">
            <div className="sliding"></div>
            <input
              type="button"
              className="about-header"
              value="About"
              onClick={function handleClick() {
                document.querySelector(".wrapper").scrollIntoView()
              }}
            />
            <input
              type="button"
              className="projects-header"
              value="Projects"
              onClick={function handleClick() {
                document.querySelector(".projects").scrollIntoView()
              }}
            />
            <input
              type="button"
              className="contact-header"
              value="Contact"
              onClick={function handleClick() {
                document.querySelector(".contact").scrollIntoView()
              }}
            />
          </div>
        </div>
        <div className="about">
          <div className="about-title">
            <h2>About me</h2>
          </div>
          <div className="about-content">
            Hi there! My name is <span>Antonio Vasilevski</span>. I'm a junior
            web developer with a passion for building great user experiences.
            <br />
            <br />
            For the past 2 years I've had the opportunity to work on a variety
            of freelance and personal projects while attending university and
            completing a Python developer course.
            <br />
            <br />
            As a developer, I'm always looking to learn and grow. I'm
            comfortable working with a variety of programming languages and
            frameworks, and always eager to take on new challenges.
            <br />
            <br />
            Thank you for taking the time to learn a little bit about me.
          </div>
          <input
            type="button"
            className="contact-me-button"
            value="Contact me!"
            onClick={function handleClick() {
              document.querySelector(".contact").scrollIntoView()
            }}
          />
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
        <div className="education">
          <h2 className="education-title">Education</h2>
          <Education
            classes="education-component finki"
            company="Faculty of Computer Science and Engineering, Skopje"
            field="Computer Science"
            year="2018 - 2021"
          />
          <Education
            classes="education-component semos"
            company="Semos Education"
            field="Python Developer"
            year="2022"
          />
          <Education
            classes="education-component python-cert"
            company="Python Institute"
            field="PCEP Certificate"
            year="2023"
          />
        </div>
        <div className="projects">
          <h2 className="project-title">Projects</h2>
          <Project
            classes="project-container data-cleaning"
            title="Data Cleaning Flask App"
            image="/images/data cleaning app.png"
            content="Web application built in Flask, part of a Python Developer Academy.
             Main focus of the aplication was the back-end, cleaning and updating a SQL database. 
             Additionaly the data is encrypted and written to a MongoDB collection, after which
             it is exported to an HTML table.
             Front-end is done with HTML/CSS/JavaScript."
            repo="https://github.com/antoniovasilevski/python-mongodb-flask-project"
          />
          <Project
            classes="project-container portfolio-app"
            title="Portfolio with React"
            content="Started writing this portfolio project in HTML, CSS and a few JavaScript functions.
            Converted to a React app soon after, using React Components for most of the objects in the app.
            Email form is done with a custom FormComponent class, validating the email through an await fetch 
            api request, if the email address entered has a valid SMTP connection, EmailJS is used to
            send the message to my email. Navbar slider animation is done on scroll, checks if an element is in view
            of the client, then using translateY, moves the slider appropriately. Using CSS Grid for most of the site."
            repo="https://github.com/antoniovasilevski/portfolio-app"
          />
          <Project
            classes="project-container sports-store"
            title="Sports Store"
            image="/images/sports-website.png"
            content="Personal project website, expirimenting with CSS animations, some animanions with JavaScript functions
             like background following mouse pointer, load in elements on scroll."
            repo="https://github.com/antoniovasilevski/python-mongodb-flask-project"
          />
        </div>
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
              <img src="/icons/github.svg" alt="Github" />
              <div className="github">Github</div>
            </a>
            <a
              href="https://www.linkedin.com/in/antonio-vasilevski-60988b266/"
              target="_blank"
              className="linkedin-container"
            >
              <img src="/icons/linkedin.svg" alt="Linkedin" />
              <div className="linkedin">Linkedin</div>
            </a>
            <div className="my-email">vasilevski.antonio@outlook.com</div>
          </div>
          <FormComponent />
        </div>
      </div>
    </div>
  )
}

export default App
