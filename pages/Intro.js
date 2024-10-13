const Intro = () => {
    return (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}>
            <p
                style={{
                    fontFamily: "Roman, serif",
                    fontSize: "18px",
                    lineHeight: "1.5",
                    color: "#469",
                    margin: "0 0 15px 0", // Adjusted margin for better spacing
                }}
            >Your appearance has a voice that is quite faster louder than your tongue sometimes.

At Wonge enterprise we believe in elegance. Let us help you make a significant statement of elegance, class, joy and self love with your appearance alone without having to speak a word. 

Trust us to grow with you on your elegance journey
                <i
                    style={{
                        
                        color: "rgba(165, 42, 42,1)",
                        fontSize: "22px",
                        display: "block", // Changed to block for better spacing
                        marginTop: "10px", // Added margin for spacing
                    }}
                >
                    You can click the WhatsApp icon and make your order.
                </i>
            </p>
        </div>
    );
};

export default Intro;
