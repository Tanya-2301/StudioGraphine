import React, { useState } from 'react';
import './hamburger.css'; // Import your custom CSS file

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#signin">Sign In</a>
        <a href="#signup">Sign Up</a>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
      </div>
    </div>
  );
}

export default App;
