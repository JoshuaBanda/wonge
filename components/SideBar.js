import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaHome, FaTimes } from 'react-icons/fa';  // Importing both hamburger and close icons
import { FaBarsStaggered } from 'react-icons/fa6';

const Sidebar = () => {
  // State to toggle sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div style={{
      display: 'flex',
      zIndex: 1000,
      position: 'relative',
      top:'-25px',  // Changed to relative for the icon container
      left:'-25px'
    }}>
      {/* Icon to toggle sidebar (conditionally render based on isOpen) */}
      {!isOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            fontSize: '30px',
            cursor: 'pointer',
            padding: '20px',
            position: 'absolute',
            top: '20px',
            left: '20px', // Positioning the icon in the top-left corner
            zIndex: 1001, // Ensure the icon is above the sidebar
          }}
        >
          <FaBarsStaggered />
        </div>
      )}

      {/* Sidebar */}
      {isOpen && (
        <div style={{
          position: 'fixed',  // Sidebar should be fixed
          top: 0,
          left: 0,
          height: '100%',
          width: '250px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '20px',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out', // Smooth slide-in and slide-out effect
        }}>
          {/* Close Button */}
          <div 
            onClick={closeSidebar} 
            style={{
              fontSize: '25px',
              color: '#fff',
              cursor: 'pointer',
              position: 'absolute',
              top: '20px',
              right: '20px',
            }}
          >
            <FaTimes />
          </div>

          <h3 style={{ marginBottom: '20px', color: '#fff' }}> Menu</h3>
          
        <div>

            <nav >
                <Link
                    href="/home/HomePage"
                    style={{  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                    onClick={() => {
                    handleHomeClick();
                    closeSidebar();
                    }}
                >
                    Home
                    <FaHome style={{ fontSize: '25px', marginLeft: 'auto' }} />
                </Link>
                <Link
                    href="/Jewelry"
                    style={{  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                    onClick={closeSidebar}
                >
                    Jewelry
                </Link>
                    <Link
                    href="/Avon"
                    style={{  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                    onClick={closeSidebar}
                >
                    Lotion
                </Link>
                <Link
                    href="/Policy"
                    style={{  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                    onClick={closeSidebar}
                >
                    Policies
                </Link>
                    
                <Link
                    href="/manageInventory/ManageInventory"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                    onClick={closeSidebar}
                >
                    Settings
                </Link>
                </nav>
            </div>
                
        </div>
      )}
    </div>
  );
};

export default Sidebar;
