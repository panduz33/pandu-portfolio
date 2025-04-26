import { useState, useRef, useEffect } from 'react'
import Menu from './Menu'
import '../styles/Experiences.css'

function Experiences({ onNavigate,visitorName }) {
  return (
    <Menu onNavigate={onNavigate} activePage="experiences" visitorName={visitorName}>
      <div className="experiences-content">
        <div className="experiences-header">
          <h1>Professional Experience</h1>
          <p className="subtitle">My journey in software testing and quality assurance</p>
        </div>
        
        {/* Rest of the Experiences page content */}
      </div>
    </Menu>
  )
}

export default Experiences