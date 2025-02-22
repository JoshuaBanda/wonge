import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import HomeOptions from "../Desings/HomeOptions";
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import ItemList from "../Desings/ItemList";
import axios from "axios";
import ShopItems from "./ShopItems";
import PaperText from "../Desings/PaperEdge";
import SearchBox from "../Desings/SearchBox";
import ScrollAnimatedComponent from "../Desings/ScrollableAnimatedComponent";
import { useInView } from "react-intersection-observer";
import styled from 'styled-components'; // Styled-components for cleaner styling

const HomePage = () => {
  const { ref: listRef, inView: listInView } = useInView({
    threshold: 0.5,
  });

  const { ref: shopRef, inView: shopInView } = useInView({
    threshold: 0.5,
  });

  const items = ["Avon", "Earrings", "Brochus", 'Perfume'];

  // State to keep track of selected item
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("Avon");

  // Handle when an item is clicked
  const handleOnClick = (item) => {
    setSelectedItem(item);
    setSearch(item); // Update search when an item is clicked
  };

  useEffect(() => {
    // Pre-select an item on initial load
    handleOnClick('Avon');
  }, []);

  return (
    <>
      <Container>
        <SearchBox />

        <Title>Find the best Cosmetics</Title>

        <ItemsListContainer>
          <ul>
            {items.map((item, index) => {
              const isSelected = selectedItem === item;
              const myBackgroudColor = isSelected ? "#A47864" : "white";
              const myTextColor = isSelected ? "white" : "black";

              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'keyframes', stiffness: 100, duration: 2 }}
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
        </ItemsListContainer>

        <Carousel />

        <PaperTextContainer>
          <PaperText />
        </PaperTextContainer>

        <AnimatePresence>
          <motion.div
            ref={listRef}
            initial={{ opacity: 0, y: 350 }}
            animate={{
              opacity: listInView ? 1 : 0,
              y: listInView ? 0 : 250,
              visibility: listInView ? 'visible' : 'hidden',
            }}
            exit={{
              opacity: 0,
              y: 500,
              visibility: 'hidden',
            }}
            transition={{
              type: 'keyframes',
              stiffness: 300,
              duration: 2,
            }}
          >
            <ItemList />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            ref={shopRef}
            initial={{ opacity: 0, y: 350 }}
            animate={{
              opacity: shopInView ? 1 : 0,
              y: shopInView ? 0 : 250,
              visibility: shopInView ? 'visible' : 'hidden',
            }}
            exit={{
              opacity: 0,
              y: 500,
              visibility: 'hidden',
            }}
            transition={{
              type: 'keyframes',
              stiffness: 300,
              duration: 2,
            }}
          >
            <ShopItems searchItem={selectedItem} />
          </motion.div>
        </AnimatePresence>

        <ScrollAnimatedComponent />
      </Container>
    </>
  );
};

export default HomePage;

// Styled components for cleaner styling
const Container = styled.div`
  position: relative;
  margin-top: 80px;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  height: 5vh;
  font-family: 'DM Sans', sans-serif;
  color: #333;
  font-weight: bolder;
`;

const ItemsListContainer = styled.div`
  position: relative;
  padding: 10px;
  margin: 10px;
  overflow-x: scroll;
  max-width: 100%;
  padding-bottom: 10px;
  scrollbar-width: none;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
  }

  li {
    margin-left: 10px;
    cursor: pointer;
    font-size: 22px;
  }
`;

const PaperTextContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 18px;
  margin: 50px 20px;
`;

