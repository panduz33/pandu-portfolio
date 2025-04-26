import React from 'react'
import Menu from './Menu'
import '../styles/Home.css'

function Home({ onNavigate, visitorName }) {
  return (
    <Menu onNavigate={onNavigate} activePage="home" visitorName={visitorName}>
      <div className="home-content">
        <div className="home-header">
          <h1>Welcome to Pandu's Portfolio</h1>
          <p className="subtitle">QA Engineer & Test Automation Specialist</p>
        </div>
        
        <div className="home-section">
          <h2>About This Site</h2>
          <p>
            This portfolio showcases my professional journey, skills, and experience in the field of 
            software quality assurance and test automation. Feel free to explore the different sections 
            to learn more about me.
          </p>
        </div>
        
        <div className="home-navigation">
          <h2>Navigation Guide</h2>
          <p>Please use the menu below to explore different sections:</p>
          
          <div className="nav-options">
            <div className="nav-option">
              <h3>About</h3>
              <p>Learn about my background, education, and professional interests</p>
              <button onClick={() => onNavigate('about')} className="nav-button">Go to About</button>
            </div>
            
            <div className="nav-option">
              <h3>Experiences</h3>
              <p>Explore my professional journey and career highlights</p>
              <button onClick={() => onNavigate('experiences')} className="nav-button">Go to Experiences</button>
            </div>
            
            <div className="nav-option">
              <h3>Tech Stack</h3>
              <p>Discover the tools and technologies I work with</p>
              <button onClick={() => onNavigate('tech-stack')} className="nav-button">Go to Tech Stack</button>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  )
}

export default Home