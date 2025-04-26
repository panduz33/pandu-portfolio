import { useState, useEffect, useRef } from 'react'
import About from './components/About'
import Experiences from './components/Experiences'
import TechStack from './components/TechStack'
import Home from './components/Home'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const promptShown = useRef(false)
  
  // Get visitor name from cookie or empty string
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return '';
  };
  
  // Set cookie with 1 hour expiration
  const setCookie = (name, value) => {
    const date = new Date();
    date.setTime(date.getTime() + (60 * 60 * 1000)); // 1 hour
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };
  
  // Initialize with cookie value
  const [visitorName, setVisitorName] = useState(() => {
    const savedName = getCookie('visitorName');
    return savedName || '';
  });
  
  // Handle prompt for visitor name at App level
  useEffect(() => {
    // Only show prompt if no visitor name is set and prompt hasn't been shown
    if (!visitorName && !promptShown.current) {
      promptShown.current = true;
      const name = prompt("Welcome! Please enter your name:", "");
      if (name && name.trim() !== '') {
        setVisitorName(name);
        setCookie('visitorName', name);
      }
    }
  }, []); // Empty dependency array - run once on mount
  
  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="app-container">
      {currentPage === 'home' && (
        <Home 
          onNavigate={handleNavigate} 
          visitorName={visitorName} 
        />
      )}
      {currentPage === 'about' && (
        <About onNavigate={handleNavigate} visitorName={visitorName} />
      )}
      {currentPage === 'experiences' && (
        <Experiences onNavigate={handleNavigate} visitorName={visitorName} />
      )}
      {currentPage === 'tech-stack' && (
        <TechStack onNavigate={handleNavigate} visitorName={visitorName} />
      )}
    </div>
  )
}

export default App
