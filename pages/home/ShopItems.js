import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import Image from "next/image";
import styles from '../../styles/shopItems.module.css'
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
                <Image
                    src={item.photo_url} // Use the photo_url from the API
                    alt={item.name}
                    width={250} // Adjust width as needed
                    height={150} // Adjust height as needed
                    style={{ borderRadius: "8px", marginBottom: "10px" }}
                    className={styles.pic}
                />
            ) : (
                <p>No image available</p>
            )}
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
        </div>
    ));

    return (
        <div style={{ position: "relative", marginTop: "100px" }}>
            {/* Render the list of homeItems */}
            {homeItems.length > 0 ? homeItems : <p>No items found.</p>}
        </div>
    );
};

export default ShopItems;
