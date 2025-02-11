import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the eye icons

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Redirect to the create account page and pass email and password as query params
    router.push({
      pathname: "/userAunthentication/CreateAccountPage",
      query: { email, password },
    });
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw", // 100% of the viewport width
          height: "100vh", // 100% of the viewport height
        }}
      >
        {/* The background image with blur effect */}
        <Image
          src="/wonge2.jpg"
          alt="signupimage"
          fill
          priority
          quality={80}
          style={{
            objectFit: "cover", // Cover the entire area
            filter: "blur(1px)", // Apply blur effect to the background image only
            zIndex: -1, // Ensure the image stays in the background
          }}
        />

        {/* Dark overlay on top of the blurred image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay with transparency
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 0, // Overlay stays on top of the blurred image
          }}
        >
          {/* Sign-up content with clear text */}
          <div
            style={{
              position: "relative",
              height: "650px",
              width: "75%", // Ensure container width is proportionate
              maxWidth: "500px", // Optional max-width
              margin: "auto",
              border: "1px solid white",
              backgroundColor: "rgba(255, 255, 255, 0.6)", // Light white overlay
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              borderRadius: '20px',
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
            <p
              style={{
                color: "white",
                fontSize: "30px",
                marginBottom: "20px",
                textAlign: "center",
                position: "relative", // Ensure text is clear and not blurred
                zIndex: 1, // Text stays on top of the container
              }}
            >
              Sign Up
            </p>

            {/* Sign-up Form */}
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
              {/* Email Input with Label */}
              <label
                htmlFor="email"
                style={{
                  color: "white",
                  marginBottom: "5px",
                  fontSize: "14px",
                  textAlign: "left",
                  width: "80%",
                  maxWidth: "400px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: "10px",
                  width: "80%", // Make the input fields full-width
                  maxWidth: "400px", // Optional: max width for the inputs
                  marginBottom: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "50px",
                  fontSize: "16px",
                }}
              />

              {/* Password Input with Label and Icon */}
              <label
                htmlFor="password"
                style={{
                  color: "white",
                  marginBottom: "5px",
                  fontSize: "14px",
                  textAlign: "left",
                  width: "80%",
                  maxWidth: "400px",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative", width: "80%", maxWidth: "400px" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    padding: "10px",
                    width: "100%",
                    marginBottom: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "50px",
                    fontSize: "16px",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    background: "none",
                    border: "none",
                    color: "gray",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>

              {/* Confirm Password Input with Label and Icon */}
              <label
                htmlFor="confirmPassword"
                style={{
                  color: "white",
                  marginBottom: "5px",
                  fontSize: "14px",
                  textAlign: "left",
                  width: "80%",
                  maxWidth: "400px",
                }}
              >
                Confirm Password
              </label>
              <div style={{ position: "relative", width: "80%", maxWidth: "400px" }}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{
                    padding: "10px",
                    width: "100%",
                    marginBottom: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "50px",
                    fontSize: "16px",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    background: "none",
                    border: "none",
                    color: "gray",
                    cursor: "pointer",
                  }}
                >
                  {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button>
            </form>

            {/* Redirect to Login */}
            <p
              style={{
                marginTop: "20px",
                color: "white",
                fontSize: "16px",
                textAlign: "center",
                zIndex: 1, // Make sure it's on top of the other content
              }}
            >
              Already have an account?{" "}
              <Link
                href="/" // Link to login page
                style={{
                  color: "#007bff", // Blue color for the link
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
