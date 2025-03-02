import style from '../styles/Navbar.module.css';
import Image from 'next/image';
function Navbar(){
  return(
    <>
      <div className={style.container}>
        
        {/*name of website*/}
        <span>
        </span>
        <div className={style.rightCornerDecolation}>
          hi
        </div>
        <div className={style.rightSecCornerDecolation}>
          hi
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