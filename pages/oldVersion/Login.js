import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export function Login() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const postData = async (event) => {
        event.preventDefault(); // Prevent default form submission
        if (name === 'tiongebanda') {
            setLoading(true);
            setTimeout(() => {
                setLoading(false); // Stop loading
                router.push('/ManageProducts'); // Redirect after timeout
            }, 1500);
        } else {
            alert('Invalid credentials'); // Handle invalid input
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f4f8',
        }}>
            <div style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                padding: "40px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "300px",
                textAlign: "center"
            }}>
                <h2 style={{ marginBottom: "20px", color: "#333" }}>Sign In</h2>
                {loading ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="spinner" />
                        <p style={{ color: "green", fontFamily: "Roman, serif", fontSize: "18px" }}>Loading...</p>
                    </div>
                ) : (
                    <form onSubmit={postData}>
                        <label style={{ display: 'block', marginBottom: '10px', color: "#555" }}>Name</label>
                        <input
                            style={{
                                border: "1px solid #007BFF",
                                borderRadius: "5px",
                                height: "35px",
                                padding: "0 10px",
                                width: "100%",
                                marginBottom: "20px"
                            }}
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <button
                            style={{
                                width: "100%",
                                padding: "10px",
                                backgroundColor: "#28a745",
                                border: "none",
                                borderRadius: "5px",
                                color: "white",
                                fontSize: "16px",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease"
                            }}
                            type="submit"
                        >
                            Sign In
                        </button>
                    </form>
                )}
            </div>

            <style jsx>{`
                .spinner {
                    border: 8px solid #f3f3f3; /* Light grey */
                    border-top: 8px solid rgb(179, 57, 86); /* Blue */
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                    margin-bottom: 10px; /* Space between spinner and text */
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default Login;
