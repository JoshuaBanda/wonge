import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const DisplayInstruction = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const showMessage = () => {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 3000); // Show for 3 seconds
        };

        // Set the interval to show the message minute and half
        const interval = setInterval(showMessage, 90000); 

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div style={containerStyle}>
            {visible && (
                <div style={messageStyle}>
                    Click the WhatsApp icon to talk to Wonge online
                    <Image 
                        src='/WhatsApp_icon.png' 
                        alt='WhatsApp'
                        width={40}
                        height={40}
                        style={iconStyle} 
                    />
                </div>
            )}
        </div>
    );
}

// Styles
const containerStyle = {
    position: "fixed",
    top: "30%",
    left: "1%",
    zIndex: 9999,
};

const messageStyle = {
    padding: "10px",
    fontSize: "20px",
    color: "#007BFF", // Blue text color
    backgroundColor: "rgba(255,255,255,0.9)", 
    borderRadius: "0 8px 8px 0", 
    border: "2px solid rgba(0, 0, 0, 0.2)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Roboto', sans-serif", 
};

const iconStyle = {
    padding: "2px",
    marginLeft: "5px", // Add space between text and icon
};

export default DisplayInstruction;
