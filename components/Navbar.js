import { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const checkScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // Initial check

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div style={navbarStyle}>
      <h2 style={headingStyle}>Wonge</h2>

      {isLargeScreen ? (
        <nav style={{ textAlign: "right" }}>
          <Link href="/" style={menuStyle}>Home</Link>
          <Link href="/Avon" style={menuStyle}>Avon Products</Link>
          <Link href="/Jewelry" style={menuStyle}>Jewelry</Link>
          <Link href="/Login" style={menuStyle}>Uploads</Link>
        </nav>
      ) : (
        <>
          <button onClick={toggleSidebar} style={buttonStyle} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="none"/>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#4a2c2a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <nav style={{ ...sidebarStyle, display: isOpen ? 'block' : 'none' }}>
            <button onClick={toggleSidebar} style={closeButtonStyle} aria-label="Close menu">
              &times;
            </button>
            <Link href="/" style={sidebarLinkStyle} onClick={closeSidebar}>Home</Link>
            <Link href="/Avon" style={sidebarLinkStyle} onClick={closeSidebar}>Avon Products</Link>
            <Link href="/Jewelry" style={sidebarLinkStyle} onClick={closeSidebar}>Jewelry</Link>
            <Link href="/Login" style={sidebarLinkStyle} onClick={closeSidebar}>Uploads</Link>
          </nav>
        </>
      )}
    </div>
  );
}

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 30px',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(250, 200, 205, 0.95)',
  zIndex: 1000,
  border: '1px solid #ddd',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4)',
};

const headingStyle = {
  fontFamily: "'Roboto', sans-serif", // Match with body font
  fontSize: "2rem",
  color: "#4a2c2a",
  margin: "0",
  textAlign: "center",
  textShadow: "2px 4px 2px rgba(0,0,0,0.4)"
};

const menuStyle = {
  margin: "0 15px",
  fontSize: "1.2rem",
  textDecoration: "none",
  color: "#4a2c2a",
  transition: "color 0.3s",
};

const buttonStyle = {
  display: 'block',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const closeButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '30px',
  color: '#4a2c2a',
  cursor: 'pointer',
  padding: '0',
  margin: '0 0 20px 0',
};

const sidebarStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  width: '200px',
  backgroundColor: 'rgba(250, 200, 205, 0.8)',
  borderRadius: '10px 0 0 10px',
  boxShadow: '-2px 0 5px rgba(0,0,0,0.5)',
  padding: '20px',
  zIndex: 1000,
};

const sidebarLinkStyle = {
  display: 'block',
  margin: '10px 0',
  fontSize: '1.5rem',
  color: 'white', // Match text color
  textDecoration: 'none',
  padding: '10px 15px',
  borderRadius: '8px',
  backgroundColor: 'rgb(179, 57, 86)',
  boxShadow: '5px 0 5px rgba(0,0,0,0.5)',
  transition: 'background-color 0.3s',
};

export default Navbar;
