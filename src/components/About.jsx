import Menu from './Menu'
import '../styles/About.css'

function About({ onNavigate, visitorName }) {
  const technicalSkills = [
    "Manual Testing", "Automation Testing", "API Testing", "Web Testing", "Mobile Testing (Android)", "Test Case Design", "Test Planning", 
    "SQL", "HTML", "CSS", "REST API", "GraphQL", "Javascript", "Java", "Golang"
  ];

  const tools = [
    "WebdriverIO", "CodeceptJS", "Node-RED", "Appium", "Appium Inspector", "HTTP-Toolkit", "Mocha JS", "Chai JS", 
    "Allure", "Postman", "Selenium", "Selenium IDE", "Katalon", "Git", "Hammertime", "Hammerflux", "Tesla-Go", "T-Rex", "Endurium"
  ]

  const softSkills = [
    "Analytical Thinking", "Attention to Detail", "Problem Solving", "Communication", "Collaboration", 
    "Mentorship", "Adaptability", "Time Management"
  ]

  return (
      <Menu onNavigate={onNavigate} activePage="about" visitorName={visitorName}>
      <div className="about-content">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="subtitle">Software Test Engineer & Quality Assurance Specialist</p>
        </div>
        
        <div className="about-section">
          <h2>Who I Am</h2>
          <p>I'm a passionate Software Test Engineer with expertise in both manual and automated testing and quality assurance. 
          I have strong attention to detail and a passion for exploration, with experience in Web UI testing, API testing, and manual and automated testing for Android applications.</p>
          <p>I collaborate closely with developers to investigate and identify the root causes of bugs in both Web UI and Android apps, and support Product Managers in conducting User Acceptance Testing (UAT) and feature or application demonstrations.</p>
          <p>My approach combines technical expertise with a user-centered mindset, ensuring that applications not only function correctly but also provide an excellent user experience.</p>
        </div>
        
        <div className="about-section">
          <h2>My Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <ul>
                {technicalSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                {tools.map((tool, index) => 
                <li key={index}>{tool}</li>)}
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  )
}

export default About