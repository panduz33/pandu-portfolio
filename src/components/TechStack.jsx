import { useState, useEffect, useRef } from 'react'
import Menu from './Menu'
import '../styles/TechStack.css'

function TechStack({ onNavigate, visitorName }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  
  // Tools with descriptions
  const imageData = [
    {
      url: '/images/postman-newman-cli.png',
      title: 'Postman',
      summary: 'API Testing & Development',
      pros: ['User-friendly interface', 'Extensive testing capabilities', 'Great for collaboration', 'Automated testing support'],
      description: 'Postman is a popular API client that makes it easy to create, share, test, and document APIs. It offers a user-friendly interface for sending requests, receiving responses, setting up automated tests, and generating documentation.',
      projects: [
        { name: 'API Testing Collection', url: 'https://github.com/yourusername/postman-api-testing' },
        { name: 'Automated Test Suite', url: 'https://github.com/yourusername/postman-automation' },
        { name: 'API Documentation', url: 'https://github.com/yourusername/api-docs' }
      ]
    },
    {
      url: 'https://miro.medium.com/v2/resize:fit:597/1*A-89RxRz9KsR9_JEhWU7WQ.jpeg',
      title: 'CodeceptJS',
      summary: 'End-to-End Testing Framework',
      pros: ['Easy-to-read syntax', 'Multiple drivers support', 'Parallel testing', 'BDD-style assertions'],
      description: 'CodeceptJS is a modern end-to-end testing framework with a focus on developer experience. It provides a high-level API over popular testing tools like Playwright, Puppeteer, and Selenium WebDriver, allowing you to write tests in a user-centric way.',
      projects: [
        { name: 'E2E Test Examples', url: 'https://github.com/yourusername/codeceptjs-examples' },
        { name: 'Page Object Models', url: 'https://github.com/yourusername/codeceptjs-pom' },
        { name: 'CI Integration', url: 'https://github.com/yourusername/codeceptjs-ci' }
      ]
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsYNDxozxEV5ZEvuhKM5RS511QBf9owy8LA&s',
      title: 'Node-RED',
      summary: 'Flow-based Programming Tool',
      pros: ['Visual programming interface', 'Large library of nodes', 'Easy integration with IoT devices', 'Low-code development'],
      description: 'Node-RED is a flow-based programming tool for connecting hardware devices, APIs, and online services. It provides a browser-based editor that makes it easy to wire together flows using a wide range of nodes, and then deploy them with a single click.',
      projects: [
        { name: 'IoT Dashboard', url: 'https://github.com/yourusername/node-red-iot' },
        { name: 'API Integration Flows', url: 'https://github.com/yourusername/node-red-api' },
        { name: 'Custom Nodes', url: 'https://github.com/yourusername/node-red-custom' }
      ]
    },
    {
      url: '/images/android-http-toolkit.png',
      title: 'Android Device Emulator + HTTP Toolkit',
      summary: 'Mobile Testing & Network Debugging',
      pros: ['Real device simulation', 'Network traffic inspection', 'API debugging', 'Performance monitoring'],
      description: 'The Android Device Emulator combined with HTTP Toolkit provides a powerful environment for testing mobile applications and debugging network traffic. This combination allows developers to intercept, view and mock HTTP(S) from Android emulators, helping to identify and fix issues in mobile app communication.',
      projects: [
        { name: 'Mobile App Testing', url: 'https://github.com/yourusername/android-testing' },
        { name: 'Network Mocks', url: 'https://github.com/yourusername/http-mocks' },
        { name: 'Performance Analysis', url: 'https://github.com/yourusername/mobile-performance' }
      ]
    },
    {
      url: 'https://mochajs.org/static/favicon.copy.f17f048f84.png',
      title: 'Mocha JS + Chai JS + Axios',
      summary: 'JavaScript Testing & HTTP Client Stack',
      pros: ['Flexible test structure', 'Expressive assertion library', 'Promise-based HTTP requests', 'Great for API testing'],
      description: 'This powerful combination provides a complete solution for JavaScript testing. Mocha offers a feature-rich testing framework, Chai delivers an expressive assertion library with multiple styles, and Axios handles HTTP requests with an elegant promise-based API. Together they create a robust stack for testing APIs and JavaScript applications.',
      projects: [
        { name: 'API Test Suite', url: 'https://github.com/yourusername/mocha-api-tests' },
        { name: 'Test Helpers', url: 'https://github.com/yourusername/chai-helpers' },
        { name: 'Request Library', url: 'https://github.com/yourusername/axios-wrapper' }
      ]
    },
    {
      url: 'https://webdriver.io/img/logo-webdriver-io.png',
      title: 'WebdriverIO',
      summary: 'Next-gen Browser & Mobile Automation',
      pros: ['Modern JavaScript support', 'Cross-browser testing', 'Mobile testing capabilities', 'Extensive plugin ecosystem'],
      description: 'WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite.',
      projects: [
        { name: 'Browser Automation', url: 'https://github.com/yourusername/webdriverio-browser' },
        { name: 'Mobile Testing', url: 'https://github.com/yourusername/webdriverio-mobile' },
        { name: 'Custom Commands', url: 'https://github.com/yourusername/webdriverio-commands' }
      ]
    },
    {
      url: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/header/katalon_logo.svg',
      title: 'Katalon',
      summary: 'Unified Quality Management Platform',
      pros: ['Codeless automation', 'Cross-platform testing', 'CI/CD integration', 'Comprehensive reporting'],
      description: 'Katalon is an all-in-one test automation solution that helps teams of any size deliver high-quality software. It provides capabilities for API, web, mobile, and desktop application testing with both codeless and code-based approaches.',
      projects: [
        { name: 'Test Cases Repository', url: 'https://github.com/yourusername/katalon-tests' },
        { name: 'Custom Keywords', url: 'https://github.com/yourusername/katalon-keywords' },
        { name: 'Reporting Dashboard', url: 'https://github.com/yourusername/katalon-reports' }
      ]
    }
  ]
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % imageData.length)
    }, 10000)
    
    return () => clearInterval(interval)
  }, [imageData.length])
  
  // Update slider position when currentSlide changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`
    }
  }, [currentSlide])
  
  // Handle indicator click
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Handle arrow navigation
  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? imageData.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % imageData.length)
  }

  // Check if we need to show arrows (more than 3 slides)
  const showArrows = imageData.length > 3
  
  // Logic to display only a subset of indicators
  const maxVisibleIndicators = 4; // Show only 4 indicators at a time
  
  // Calculate which indicators to show
  const getVisibleIndicators = () => {
    if (imageData.length <= maxVisibleIndicators) {
      // If we have fewer slides than max indicators, show all
      return imageData.map((_, index) => index);
    }
    
    // Calculate the range of indicators to show
    let start = currentSlide - Math.floor(maxVisibleIndicators / 2);
    let end = start + maxVisibleIndicators - 1;
    
    // Adjust if we're near the beginning
    if (start < 0) {
      start = 0;
      end = maxVisibleIndicators - 1;
    }
    
    // Adjust if we're near the end
    if (end >= imageData.length) {
      end = imageData.length - 1;
      start = Math.max(0, end - maxVisibleIndicators + 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  
  const visibleIndicators = getVisibleIndicators();

  return (
    <Menu onNavigate={onNavigate} activePage="tech-stack" visitorName={visitorName}>
    <div className="tech-stack-container">
      <div className="content-container">
        <div className="left-container">
          <div className="image-slider">
            <div className="slider-images" ref={sliderRef}>
              {imageData.map((item, index) => (
                <img 
                  key={index} 
                  src={item.url} 
                  alt={item.title} 
                  className="slider-image"
                />
              ))}
            </div>
            <div className="slider-indicators">
              {showArrows && (
                <button 
                  className="slider-arrow" 
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                >
                  &#10094;
                </button>
              )}
              
              {visibleIndicators.map(index => (
                <div 
                  key={index} 
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
              
              {showArrows && (
                <button 
                  className="slider-arrow" 
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                >
                  &#10095;
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="middle-container">
            <div className="image-description">
              <h2 className="image-title">{imageData[currentSlide].title}</h2>
              <p className="image-summary">{imageData[currentSlide].summary}</p>
              <div className="image-pros">
                <h3>Pros:</h3>
                <ul>
                  {imageData[currentSlide].pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
              <p className="image-paragraph">{imageData[currentSlide].description}</p>
            </div>
          </div>
          <div className="right-container">
            <div className="github-projects">
              <h3 className="github-section-title">Related Projects</h3>
              <div className="github-links">
                {imageData[currentSlide].projects.map((project, index) => (
                  <a 
                    key={index}
                    href={project.url} 
                    className="github-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                      alt="GitHub" 
                      className="github-icon" 
                    />
                    {project.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Menu>
  )
}

export default TechStack