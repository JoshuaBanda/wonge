import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Spinner from "./Spinning";

const Avon = () => {
    const [shopItems, setShopItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://wongebackend.onrender.com/shops');
                // Filter items for "Avon product"
                const avonProducts = response.data.filter(item => item.type === 'Avon product');
                setShopItems(avonProducts);
            } catch (error) {
                setError("Failed to fetch data. Please try again later...");
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return (
        <div style={{position:"inherit",margin:"150px auto"}}><Spinner/></div>
    );
    if (error) return <p style={{color:"red"}}>{error}</p>;

    const containerStyle = {
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        marginTop: "50px"
    };

    const itemStyle = {
        position: "relative",
        backgroundColor: "rgba(255, 228, 225, 0.9)",
        margin: "15px",
        borderRadius: "8px",
        width: "80%",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
    };

    const imageStyle = {
        borderRadius: '8px',
        objectFit: 'cover',
        display: 'block',
        height: '200px',
        width: '100%',
    };

    const titleStyle = {
        color: "#5D3F2E",
        margin: "1px 0 5px 0",
        textAlign: "center",
        fontSize: "1.5em",
    };

    const priceStyle = {
        color: '#3D9970',
        fontWeight: 'bold',
        fontSize: "20px",
        textAlign: "center",
    };

    const descriptionStyle = {
        color: "#5D3F2E",
        margin: "2px",
        textAlign: "center",
        fontStyle: "italic",
        fontSize: "18px",
    };

    const whatsappStyle = {
        position: "absolute",
        bottom: "10px",
        right: "10px",
    };

    return (
        <div style={containerStyle}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                {shopItems.map((item) => (
                    <div 
                        key={item.id} 
                        style={itemStyle} 
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.3)";
                        }} 
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
                        }}
                    >
                        {item.url ? (
                            <Image 
                                src={item.url} // Directly access the URL property
                                alt={item.name} 
                                width={200} 
                                height={200} 
                                layout='responsive'
                                style={imageStyle} 
                            />
                        ) : (
                            <div style={{ height: '200px', backgroundColor: '#ccc', borderRadius: '8px' }}>
                                No Image Available
                            </div>
                        )}
                        <h3 style={titleStyle}>{item.name}</h3>
                        <p style={priceStyle}>MK{item.price.toFixed(2)}</p>
                        <p style={descriptionStyle}>{item.description}</p>
                        <a href={`https://wa.me/265886198551?text=${item.whatsappMessage}`} title='WhatsApp' style={whatsappStyle}>
                            <Image 
                                src='/WhatsApp_icon.png' 
                                alt='WhatsApp'
                                width={40}
                                height={40}
                                style={{ padding: "2px" }} 
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Avon;
