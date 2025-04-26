import Menu from './Menu'
import '../styles/About.css'

function About({ onNavigate, visitorName }) {
  return (
      <Menu onNavigate={onNavigate} activePage="about" visitorName={visitorName}>
      <div className="about-content">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="subtitle">Software Test Engineer & Quality Assurance Specialist</p>
        </div>
        
        <div className="about-section">
          <h2>Who I Am</h2>
          <p>I'm a passionate Software Test Engineer with expertise in automated testing and quality assurance. With a strong background in test automation frameworks and methodologies, I help teams deliver high-quality software products that meet user expectations.</p>
          
          <p>My approach combines technical expertise with a user-centered mindset, ensuring that applications not only function correctly but also provide an excellent user experience.</p>
        </div>
        
        <div className="about-section">
          <h2>My Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Testing</h3>
              <ul>
                <li>API Testing</li>
                <li>End-to-End Testing</li>
                <li>Performance Testing</li>
                <li>Mobile Testing</li>
                <li>Test Automation</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Postman</li>
                <li>CodeceptJS</li>
                <li>WebdriverIO</li>
                <li>Mocha/Chai</li>
                <li>Katalon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  )
}

export default About