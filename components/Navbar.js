import { useEffect, useState } from 'react';
import style from '../styles/Navbar.module.css';
import Image from 'next/image';
import { FaBars, FaSeedling } from 'react-icons/fa';
import { FaCarTunnel } from 'react-icons/fa6';
import { FaShoppingBasket } from 'react-icons/fa';
import NavBarItemList from '../pages/Desings/NavBarItemList';

function Navbar() {
  const [menuItem, setMenuItem] = useState('');

  // Array of icon components
  const navItems = [
    { icon: <FaSeedling />, label: 'Seedling' },
    { icon: <FaShoppingBasket />, label: 'Basket' },
    { icon: <FaCarTunnel />, label: 'Tunnel' },
  ];

  const handleOnClick = (label) => {
    setMenuItem(label);
    console.log('Selected Item:', label); // Log the selected item
  };

  useEffect(() => {
    if (menuItem) {
      console.log('Updated menuItem:', menuItem); // Log the updated value
    }
  }, [menuItem]); // Runs whenever menuItem changes

  return (
    <div className={style.container}>
    <FaBars/>
      {/* Headings */}
      <div className={style.heading}>
        {/* Name of website */}
        <div className={style.name}>
          <span>Wonge</span>
          <span className={style.marketText}>Market</span>
          <span style={{color:'orangered'}}>Online</span>
        </div>

        {/* Menu */}
        <ul className={style.menu}>
          {navItems.map((item, index) => (
            <li key={index} onClick={() => handleOnClick(item.label)}>
              <div className={style.menuItem}>
                {item.icon} {/* Render the icon */}
                <span>{item.label}</span> {/* Render the label */}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* First Container */}
      <div className={style.firstContainer}>
        {/* Image */}
        <div className={style.firstContainerImageBox}>
          <Image
            src='/wonge5_with_no_bg.png' // Use the photo_url from the API
            alt='Perfume'
            width={220} // Adjust width as needed
            height={120} // Adjust height as needed
            className={style.pic} // Red border and rounded corners applied here
          />
        </div>

        {/* Text */}
        <div className={style.firstContainerText}>
          <h3>
            Bringing the <span className={style.highlightText}>best cosmetics</span> And <span className={style.highlightText}>Avon Lotion</span>
          </h3>
          <p className={style.subText}>
            Market with us and get the best
          </p>
        </div>
      </div>
      {/*second container*/}
      <div className={style.secondContainer}>
          <NavBarItemList/>
      </div>
    </div>
  );
}

export default Navbar;