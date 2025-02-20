import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Carousel.module.css"; // Import the custom CSS file

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/lotion2.jpg",
    "/perfume1.jpg",
    "/broch1.jpg",
    "/earring2.jpg",
    "/lotion1.jpg",
    "/perfume2.jpg",
    "/broch2.jpg",
    "/earring3.jpg",
    "/perfume3.jpg",
    "/lotion.jpg",
  ];
  

  const totalItems = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
    );
  };

  // Auto slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className={styles.carouselItem} key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* Optional: Add navigation buttons */}
      <button className={styles.prevBtn} onClick={prevSlide}>
        &lt;
      </button>
      <button className={styles.nextBtn} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
