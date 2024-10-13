import { useState, useEffect } from 'react'; 
import Image from 'next/image';

const Cool = () => {
    const [position, setPosition] = useState({ left: '10%', top: '20%' });
    const [size, setSize] = useState(50);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [orderMessage, setOrderMessage] = useState(false);
    const [opacity, setOpacity] = useState(0.2); // State for opacity

    const images = [
        '/5.jpg',
        '/6.jpg',
        '/7.jpg',
        '/8.jpg'
    ];

    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Update opacity based on scroll position
        var newOpacity = Math.min(1, scrollY / 300); // Adjust 300 for how quickly it fades in
        if (scrollY<60){
            newOpacity=0.4;
        }
        setOpacity(newOpacity);

        let newTop = Math.min(100, 25 + scrollY * 0.2);
        let newLeft = '10%';

        if (scrollY < 60) {
            newLeft = Math.max(0, 20 - scrollY * 0.3) + '%';
        } else {
            newLeft = '1%';
        }

        if (newTop >= 40) {
            setOrderMessage(true);
        } else if (scrollY < 80) {
            setOrderMessage(false);
        }

        const newSize = Math.min(90, 50 + scrollY);
        setPosition({
            left: newLeft,
            top: `${newTop}%`
        });
        setSize(newSize);
    };

    useEffect(() => {
        const handleScrollThrottled = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', handleScrollThrottled);

        return () => {
            window.removeEventListener('scroll', handleScrollThrottled);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (orderMessage) {
            const timer = setTimeout(() => {
                setOrderMessage(false);
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, [orderMessage]);

    return (
        <div>
            <div
                style={{
                    backgroundColor: "",
                    border: "",
                    borderRadius: "50%",
                    height: `${size}px`,
                    width: `${size}px`,
                    position: "absolute",
                    left: position.left,
                    top: position.top,
                    zIndex: 4,
                    opacity: opacity, // Set opacity here
                    transition: "left 0.4s ease-out, top 0.3s ease-out, height 0.6s ease-out, width 0.6s ease-out, opacity 0.3s ease-out" // Add opacity to transition
                }}
            >
                <Image
                    src={images[currentImageIndex]}
                    alt='Dynamic Icon'
                    width={size}
                    height={size}
                    quality={100}
                    style={{ border: "5px solid white", borderRadius: "55%" }}
                    onClick={() => {
                        setOrderMessage(item => !orderMessage);
                    }}
                />
                {orderMessage && (
                    <div>
                        <div style={{
                            backgroundColor: 'rgba(250, 200, 205, 0.95)',
                            borderRadius: '10px',
                            padding: '5px 15px',
                            maxWidth: '300px',
                            position: 'relative',
                            margin: '10px',
                            display: 'inline-block',
                            color: "brown",
                        }}>
                            Order Now
                            <div style={{
                                content: '',
                                position: 'absolute',
                                bottom: '100%',
                                left: '20px',
                                marginLeft: '-5px',
                                borderWidth: '5px',
                                borderStyle: 'solid',
                                borderColor: 'transparent transparent pink transparent',
                            }}></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cool;
