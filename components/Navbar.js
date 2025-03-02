import { useEffect, useState } from 'react';
import style from '../styles/Navbar.module.css';
import Image from 'next/image';

function Navbar() {
  const [menuItem, setMenuItem] = useState('');
  const navItems = ['brochus', 'avon lotion', 'earrings'];

  const handleOnClick = (e) => {
    const selectedItem = e.target.innerText;
    setMenuItem(selectedItem);
    console.log(selectedItem); // Log the item immediately
  };

  useEffect(() => {
    if (menuItem) {
      console.log('Updated menuItem:', menuItem); // Log the updated value
    }
  }, [menuItem]); // Runs whenever menuItem changes

  const navMenu = navItems.map((item, index) => (
    <li key={index} onClick={handleOnClick}>
      <div style={{ color: index === 0 ? 'black' : 'white' }}>
        {item}
      </div>
    </li>
  ));

  return (
    <>
      <div className={style.container}>
        {/* Headings */}
        <div className={style.heading}>
          {/* Name of website */}
          <span className={style.name}>Wonge</span>

          {/* Menu */}
          <div>
            <ul className={style.menu}>
              {navMenu}
            </ul>
          </div>
        </div>

        <div className={style.rightCornerDecolation}></div>
        <div className={style.rightSecCornerDecolation}></div>
        <div className={style.flower1}></div>
        <div className={style.flower2}></div>
        <div className={style.flower3}></div>
        <div className={style.flower4}></div>
        <div>
          <Image
            src='/wonge6.jpg'
            alt='wonge6'
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            quality={100}
            className={style.navImage}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
