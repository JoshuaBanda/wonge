import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Spinner from "./Spinning";
import { supabase } from "../supabaseClient";

const AllProducts = () => {
    const [shopItems, setShopItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isHovering, setIsHovering] = useState(false);



    useEffect(()=>{
        const fetchShop=async ()=>{
            const {data,error}=await supabase
            .from('shoptable')
            .select()
            if(error){
                setError('failed to fetch, try again later...');
                console.error("error fetching data",error)
            
            }
            if (data){
                setLoading(false);
                setShopItems(data);
                
            }
        }
        fetchShop();
    },[])
    console.log(shopItems);
    


    if (loading) return <Spinner/>;
    if (error) return <p style={{color:"red"}}>{error}</p>;

    const containerStyle = {
        padding: "8px",
        borderRadius: "8px",
        backgroundColor: "#f2f2f2",
        marginTop: "25px"
    };

    const itemStyle = {
        position: "relative",
        backgroundColor: "rgba(250, 200, 205, 0.8)",
        padding: "0",
        margin: "15px",
        borderRadius: "8px",
        width: "80%",
        maxWidth: "350px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
    };

    const imageStyle = {
        borderRadius: '8px',
        objectFit: 'cover',
        display: 'block',
        margin: '0',
        height: '200px',
        width: '100%',
        maxHeight: '200px', // Ensures consistent height
    };

    const detailsStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '150px', // Fixed height for consistency
        padding: '10px',
    };

    const titleStyle = {
        color: "#5D3F2E",
        margin: "2px 0",
        textAlign: "center",
        fontSize: "1.5em",
    };

    const priceStyle = {
        color: '#3B7A57',
        fontWeight: 'bold',
        fontSize: "20px",
        textAlign: "center",
    };

    const descriptionStyle = {
        color: "#5D3F2E",
        margin: "1px 0",
        textAlign: "center",
        fontStyle: "italic",
        fontSize: "18px",
        overflow: 'hidden', // Prevent text overflow
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap', // Prevent wrapping
    };

    const whatsappContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5px",
    };

    const whatsappStyle = {
        marginLeft: "3px",
    };

    const backToTopStyle = {
        display: 'block',
        textAlign: 'center',
        margin: '15px 0',
        fontSize: '18px',
        color: '#fff',
        textDecoration: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        background: isHovering
            ? 'linear-gradient(135deg, #A4D65E, #3B7A57)'
            : 'linear-gradient(135deg, #3B7A57, #A4D65E)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
        fontWeight: 'bold',
        transform: isHovering ? 'scale(1.05)' : 'scale(1)',
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
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        {item.url ? (
                            <Image
                                src={item.url}
                                alt={item.name}
                                width={350}
                                height={200}
                                layout='responsive'
                                style={imageStyle}
                                quality={100}
                                priority
                            />
                        ) : (
                            <div style={{ height: '200px', backgroundColor: '#ccc', borderRadius: '8px' }}>
                                No Image Available
                            </div>
                        )}
                        <div style={detailsStyle}>
                            <h3 style={titleStyle}>{item.name}</h3>
                            <p style={priceStyle}>MK{item.price.toFixed(2)}</p>
                            <p style={descriptionStyle}>{item.description}</p>
                        </div>
                        <div style={whatsappContainerStyle}>
                            <a href={`https://wa.me/265886198551?text=${item.whatsappMessage}`} title='WhatsApp'>
                                <Image
                                    src='/WhatsApp_icon.png'
                                    alt='WhatsApp'
                                    width={40}
                                    height={40}
                                    style={whatsappStyle}
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <a 
                href="#top" 
                style={backToTopStyle} 
                onMouseEnter={() => setIsHovering(true)} 
                onMouseLeave={() => setIsHovering(false)}
            >
                Back to Top
            </a>
        </div>
    );
}

export default AllProducts;
