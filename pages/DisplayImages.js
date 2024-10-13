import { useState, useEffect } from "react";
import Image from 'next/image';

const DisplayImages = ({ transitionTime = 6000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    
    // Array of images
    const images = ['/0.jpg', '/1.jpg', '/2.webp', '/3.webp'];
    
    const texts = [
        ["Illuminate Your", "Glow"],
        ["Unleash Inner", "Beauty"],
        ["Elevate Your", "Elegance"],
        ["Revitalize Your", "Skin"],
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImageIndex((prev) => (prev + 1) % texts.length);
        }, transitionTime);

        return () => clearTimeout(timer);
    }, [currentImageIndex, transitionTime]);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleMouseEnter = () => {
        clearTimeout();
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setCurrentImageIndex((prev) => (prev + 1) % texts.length);
        }, transitionTime);
    };

    return (
        <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', width: '350px', height: '200px', margin: '60px auto 5px', overflow: 'hidden' }}
        >
            {texts.map((text, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: currentImageIndex === index ? 1 : 0,
                        transition: 'opacity 1s ease',
                        pointerEvents: currentImageIndex === index ? 'auto' : 'none',
                    }}
                >
                    {isLoading && <p style={{ textAlign: "center", color: "#888" }}>Loading...</p>}
                    <Image
                        src={images[index]} // Use the images array here
                        alt={`Image ${index + 1}`}
                        width={350}
                        height={200}
                        priority={index === 0}
                        onLoad={handleImageLoad}
                        style={{
                            borderRadius: '8px',
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            display: 'block',
                        }}
                    />
                    <svg
                        viewBox="0 0 330 110"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <defs>
                            <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                                <stop offset="0%" style={{ stopColor: "rgba(255, 105, 180, 0.8)", stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: "rgba(165, 42, 42,0.9)", stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: "transparent", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "transparent", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path d="M0,0 L0,200 L350,200 L350,0 Q175,100 0,0 Z" fill="url(#gradient)" />
                    </svg>
                    <div style={{
                        position: "absolute",
                        top: "65%",
                        right: "30px",
                        transform: "translateY(-50%)",
                        color: "white",
                        zIndex: 3,
                        textShadow: "10px 5px 2px rgba(0,0,0,0.4)",
                        fontSize: "22px",
                        fontWeight: "bold",
                        fontFamily: "'Dancing Script', cursive",
                    }}>
                        {text.map((line, i) => (
                            <div key={i} style={{ textAlign: "right" }}>{line}</div>
                        ))}
                    </div>
                </div>
            ))}
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px"
            }}>
                {texts.map((_, index) => (
                    <div key={index} style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: currentImageIndex === index ? "rgb(179, 57, 86)" : "lightgray",
                        margin: "0 5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                    }} />
                ))}
            </div>
        </div>
    );
}

export default DisplayImages;
