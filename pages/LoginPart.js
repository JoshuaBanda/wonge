import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSeedling } from "react-icons/fa";
import { motion } from 'framer-motion';
import axios from "axios";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading,setLoading]=useState(false);

  const handleLoading=()=>{
    setLoading(!loading);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the email and password (for debugging purposes)
    console.log("Email:", email);
    console.log("Password:", password);
    handleLoading();
    try {
      // Make the POST request with email and password
      const response = await axios.post("https://wonge-backend.onrender.com/users/logi-n", {
        email,
        password,
      });

      
      handleLoading();

      

      // Handle the response (e.g., check if authentication is successful)
      if (response.status === 201) {
        console.log("Authentication successful:", response.data);
        // You can store the token or handle the successful login response here
        router.push('/home/HomePage');
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      // Handle errors (e.g., show an error message to the user)
    }
  };

  return (
    <>
      
      
          {/* Login content with clear text */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              borderRadius:'20px',
            }}
          >
            {/* Title text */}
            <p
              style={{
                color: "white",
                fontSize: "25px",
                marginBottom: "10px",
                textAlign: "center",
                position: "relative", // Ensure text is clear and not blurred
                zIndex: 1, // Text stays on top of the container
              }}
            >
              WONGE ENTERPRISE
            </p>
            <div>
                
            <FaSeedling size={60} color="rgb(245, 244, 241)"/>
            </div>  

            {/* Login Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "15px", // Add space between the input fields
              }}
            >
              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: "10px",
                  width: "100%", // Make the input fields full-width
                  maxWidth: "500px", // Optional: max width for the inputs
                  marginBottom: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "50px",
                  fontSize: "16px",
                }}
              />
              
              {/* Password Input */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  padding: "10px",
                  width: "100%", // Make the input fields full-width
                  maxWidth: "500px", // Optional: max width for the inputs
                  marginBottom: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "50px",
                  fontSize: "16px",
                }}
              />

              {/* Submit Button */}
              <motion.button
                style={{
                    margin:'0 auto',
                  height: '40px',
                  width: '200px', // Adjust width for the link
                  textAlign: 'center',
                  color: 'white',
                  lineHeight: '30px', // Vertically center the text
                  borderRadius: '50px', // Optional: adds rounded corners
                  cursor: 'pointer', // Change cursor to pointer to show it’s clickable
                  zIndex: 20, // Ensure it appears above the overlay and below the welcome text
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', // Center the text inside the link
                  border: '3px solid transparent', // Set an initial transparent border
                  fontSize: '22px',
                  position: 'relative', // Ensure correct positioning for the animation
                  overflow: 'hidden', // Ensures border does not exceed the element’s boundary
                  animation: 'borderAnimation 2s linear infinite', // Apply the animation
                  backgroundColor:'rgba(0,0,0,0.1)'
                }}
                initial={{ opacity: 0.5, y:0 }}
                animate={{ opacity: 1,y:10 }}
                transition={{
                    type: 'spring', stiffness: 255, duration: 150, repeat: Infinity, repeatType: 'reverse',
                }}

              >
              {
                loading?(
                  
                  <p
                      style={{
                        color: "white",
                        fontSize: "15px",
                        margin:'5px auto',
                        position: "relative", // Ensure text is clear and not blurred
                        zIndex: 1, // Text stays on top of the container
                      }}
                    >
                      Loading ...
                    </p>
                ):
                (
                  
                  <p
                      style={{
                        color: "white",
                        fontSize: "20px",
                        margin:'5px auto',
                        position: "relative", // Ensure text is clear and not blurred
                        zIndex: 1, // Text stays on top of the container
                      }}
                    >
                      Login
                    </p>
                )
              }

              <style jsx>{`
                @keyframes borderAnimation {
                  0% {
                    border-color: transparent;
                  }
                  50% {
                    border-color: white;
                    border-width: 3px;
                  }
                  100% {
                    border-color: transparent;
                  }
                }
              `}</style>
            </motion.button>

            </form>

            
          </div>
          
    </>
  );
};

export default LoginPage;
