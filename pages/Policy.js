import React from 'react';

const Policy = () => {
  // Inline styles for the policy page
  const containerStyle = {
    maxWidth: '900px',
    margin: '50 auto',
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    color: '#4CAF50',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  };

  const listStyle = {
    listStyleType: 'disc',
    marginLeft: '20px',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Unima Dating Hub - User Policy</h1>

      <section style={sectionStyle}>
        <h2 style={subheadingStyle}>1. Eligibility</h2>
        <p style={paragraphStyle}>
          To use <strong>Unima Dating Hub</strong>, users must meet the following criteria:
          <ul style={listStyle}>
            <li>Age: You must be at least 18 years of age or older to use this platform.</li>
            <li>Student Status: Users must be currently enrolled in an accredited educational institution (e.g., college, university, or similar educational body). You will be required to verify your student status to create an account.</li>
          </ul>
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subheadingStyle}>2. Account Creation</h2>
        <p style={paragraphStyle}>
          When creating an account, you must provide accurate, truthful, and up-to-date information. The following is required:
          <ul style={listStyle}>
            <li>Email Address (preferably a school email address for verification).</li>
          </ul>
          You are responsible for maintaining the confidentiality of your account information, including your password, and are fully responsible for all activities that occur under your account.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subheadingStyle}>3. Privacy and Data Protection</h2>
        <p style={paragraphStyle}>
          Your privacy is of utmost importance to us. The information you provide, including personal details, profile data, and communication, will be handled as follows:
          <ul style={listStyle}>
            <li>Data Collection: We collect personal information that you provide voluntarily, including your name, email address, age, location, student status, profile picture, and any content you share (e.g., photos, messages).</li>
            <li>Data Usage: Your data is used to verify your eligibility as a student, personalize your experience on the app, facilitate connections with other users, and send notifications or updates relevant to your account.</li>
            <li>Data Sharing: We do not sell or share your personal information with third parties, except as required by law or to enforce our terms of service.</li>
            <li>Data Security: We use industry-standard security measures to protect your data, including encryption and secure servers.</li>
          </ul>
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subheadingStyle}>4. User Behavior and Conduct</h2>
        <p style={paragraphStyle}>
          By using this app, you agree to:
          <ul style={listStyle}>
            <li>Respect Other Users: Be courteous, respectful, and considerate when interacting with other users.</li>
            <li>Prohibited Content: You may not upload, share, or post any content that is offensive, abusive, or discriminatory.</li>
            <li>No Solicitations: Users are prohibited from using the platform for business transactions, solicitations, or advertising.</li>
          </ul>
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subheadingStyle}>5. Safety and Reporting</h2>
        <p style={paragraphStyle}>
          We are committed to providing a safe environment for all users. If you encounter any suspicious or inappropriate behavior, we encourage you to report it immediately.
          <ul style={listStyle}>
            <li>Reporting Mechanism: If you experience harassment, receive inappropriate messages, or encounter any user who violates the terms of service, please report them through the app’s reporting feature.</li>
            <li>Blocking Users: You have the ability to block any user who makes you feel uncomfortable. Blocking a user prevents them from sending messages or viewing your profile.</li>
          </ul>
        </p>
      </section>

      {/* You can continue adding sections as needed */}

    </div>
  );
};

export default Policy;
    