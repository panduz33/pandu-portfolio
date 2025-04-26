import '../styles/Menu.css'
import Footer from './Footer'

function Menu({ onNavigate, activePage, visitorName, children }) {
  return (
    <div className="app-layout">
      <div className="menu-container">
        <div className="menu-left">
          <div className="horizontal-menu">
            <button 
              onClick={() => onNavigate('home')} 
              className={`menu-nav-button ${activePage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className={`menu-nav-button ${activePage === 'about' ? 'active' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('experiences')} 
              className={`menu-nav-button ${activePage === 'experiences' ? 'active' : ''}`}
            >
              Experiences
            </button>
            <button 
              onClick={() => onNavigate('tech-stack')} 
              className={`menu-nav-button ${activePage === 'tech-stack' ? 'active' : ''}`}
            >
              Tech-Stack
            </button>
          </div>
        </div>
        <div className="greeting">Hi, {visitorName || 'Visitor'}!</div>
      </div>
      <div className="content-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Menu