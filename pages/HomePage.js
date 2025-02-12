import { useState } from "react";
import Carousel from "./Carousel";
import HomeOptions from "./Desings/HomeOptions";
import { motion } from 'framer-motion';

const HomePage = () => {
  const items = ["Avon Lotion", "Earrings", "Brochus",];

  // State to keep track of selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle when an item is clicked
  const handleOnClick = (item) => {
    // Set the selected item and change its background color to black
    setSelectedItem(item);
  };

  return (
    <>
      <div>
        <div style={{
          position: "relative",
          marginTop: "80px",
        }}></div>

        <div style={{
          position: "relative",
          display: "flex",
          fontSize: "30px",
          fontFamily: "initial",
          alignItems: "center",
          justifyContent: "center",  // Centers the text horizontally
          height: "5vh", // If you want to vertically center the text in the viewport
        }}>
          Find the best Cosmetics
        </div>

        <div style={{
          position: "relative",
          padding: "10px",
          margin: "10px",
        }}>

          <div style={{
            display: "flex",
            justifyContent: "flex-start", // Aligns the list to the left
            flexDirection: "row-reverse",  // This arranges the items from right to left
            overflowX: "scroll", // Enables scrolling but hides the scrollbar
            maxWidth: "100%", // Ensures the list doesn't overflow its container
            paddingBottom: "10px", // Adds some space for the scrollable area
            scrollbarWidth: "none", // For Firefox: hides the scrollbar
          }}>
            <ul style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              display: "flex",  // Makes sure the list items are in a row
              flexWrap: "nowrap", // Ensures items stay on one line
            }}>
              {items.map((item, index) => {
                // Determine background and text color based on selected item
                const isSelected = selectedItem === item;
                const myBackgroudColor = isSelected ? "black" : "white";
                const myTextColor = isSelected ? "wheat" : "black"; // If selected, text color is wheat

                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'tween', stiffness: 70, duration: 1 }}
                    style={{
                      marginLeft: "10px",  // Adds space between items
                      cursor: "pointer",  // Change cursor to pointer when hovering
                    }}
                    onClick={() => handleOnClick(item)} // Handle item click
                  >
                    <HomeOptions 
                      text={item} 
                      myBackgroudColor={myBackgroudColor} 
                      myTextColor={myTextColor} 
                    />
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        <Carousel />
      </div>
    </>
  );
}

export default HomePage;
