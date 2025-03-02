import { useState } from 'react';
import style from '../styles/Navbar.module.css';
import Image from 'next/image';
function Navbar(){
  const [menuItem,setMenuItem]=useState('');

  const navItems=['brochus','avon lotion','earrings'];

  const navMenu=navItems.map((item,index)=>{
    return(
      <>
        <li key={index} style={{
          
        }}>
          {item}
        </li>
      </>
    );
  })
  return(
    <>
      <div className={style.container}>
        {/*headings*/}
        <div className={style.heading}>
            
          {/*name of website*/}
          <span className={style.name}>
            Wonge
          </span>
          {/*menu*/}
          <div>
            <ul className={style.menu}>
              {navMenu}
            </ul>
          </div>
        </div>
        <div className={style.rightCornerDecolation}>
        </div>
        <div className={style.rightSecCornerDecolation}>
        </div>
        <div>
          <Image
            src='/wonge1.jpg'
            alt='wonge'
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            quality={100}
            className={style.navImage}
          />
        </div>
      </div>
    </>
  )
};
export default Navbar;