import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import Image from "next/image";
import styles from '../../styles/shopItems.module.css'
import Spinner from "../oldVersion/Spinning";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import LikeButton from "../like/LikeButton";
const ShopItems = ({ searchItem }) => {
    console.log('search item2', searchItem); // Check the searchItem prop

    const [items, setItems] = useState([]); // Initialize as an empty array

    // This effect runs every time the searchItem prop changes
    useEffect(() => {
        const search = async () => {
            if (searchItem) {
                try {
                    console.log('Searching for:', searchItem); // Log the search term

                    // Make API call to search for items
                    const response = await axios.get(
                        `https://wonge-backend.onrender.com/search/search?name=${searchItem}`
                    );

                    console.log("API response data:", response.data); // Check the full response data
                    
                    // Access the 'products' array in the response and set it to items state
                    setItems(Array.isArray(response.data.products) ? response.data.products : []); 

                    // Log the status and the items
                    console.log("Response Status:", response.status);
                } catch (error) {
                    console.error("Error fetching data", error);
                }
            } else {
                setItems([]); // Optional: reset items if there's no search term
            }
        };

        search(); // Call the search function whenever searchItem changes
    }, [searchItem]); // Effect depends on the searchItem prop

    // Map over the items to create the list of items
    const homeItems = Array.isArray(items) && items.map((item) => (
        <div key={item.id} style={{ }} className={styles.container}>
            {/* Check if photo_url exists and display the image */}
            {item.photo_url ? (
                <div className={styles.picContainer}>
                    
                    <Image
                        src={item.photo_url} // Use the photo_url from the API
                        alt={item.name}
                        width={150} // Adjust width as needed
                        height={150} // Adjust height as needed
                        style={{ borderRadius: "0px", marginBottom: "0px" }}
                        className={styles.pic}
                    />
                    <div className={styles.likeButton}>
                        <div>
                            <LikeButton postId='2' userId='1' initialLikeCount={0} initialLikeStatus={false}  />
                        </div>
                    </div>
                </div>
            ) : (
                <p>No image available</p>
            )}
            <div className={styles.txt}>
                <h3>{item.name}</h3>

                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalfStroke/>
                    
                </div>
                <p>: {item.description}</p>

                
                <p>Price: ${item.price}</p>
            </div>
        </div>
    ));

    /*
        <div style={{ position: "relative", marginTop: "50px" }}>
            <div>
                <span className={styles.motivationcaute}>
                At Wonge Enterprise, we’ve got exactly what you’re looking for! Searching for {searchItem} products? We’ve got you covered—find the perfect fit for you today.
                </span>
            </div>
            {/* Render the list of homeItems *//*}
            {homeItems.length > 0 ? homeItems : <p><Spinner/></p>}
        </div>*/

    return (
        <>
        
        <div>
                <span className={styles.motivationcaute}>
                At Wonge Enterprise, we’ve got exactly what you’re looking for! Searching for {searchItem} products? We’ve got you covered—find the perfect fit for you today.
                </span>
            </div>
        <div 
            style={{
                position: "relative",
                margin: "80px 10px 100px 10px",
                display: "flex",
                overflowX: "auto", // Allows horizontal scrolling
                flexWrap: "nowrap", // Prevents wrapping
                paddingBottom: "10px", // Optional, adds space for the scrollbar
                scrollbarWidth: "none", // Firefox
                WebkitOverflowScrolling: "touch", // iOS smooth scrolling
            }}
            // For webkit-based browsers (Chrome, Safari)
            className="scroll-container"
        >
            {/* Render the list of homeItems */}
            {homeItems.length > 0 ? homeItems : <Spinner/>}
        </div>
  
        </>  
    );
};

export default ShopItems;
