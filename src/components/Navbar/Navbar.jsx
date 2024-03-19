import { useState } from "react";
import styles from "./Navbar.module.css";
import "./slidingText.css";
import { Link } from "react-router-dom";


function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App"> 
      <div id="scroll-container">
        <div id="scroll-text"> <p>World Wide  Shipping  call +(91) 9810801688</p></div>
      </div>
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href="#home" className={`${styles.logo}`}>
            Tagai{" "}
          </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <Link to= '/'>            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Home
              </a>
            </li>
            </Link>

            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Catalog
              </a>
            </li>
            <Link to= "/products">
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                All products
              </a>
            </li>
            </Link>

            <Link to = "/contact">
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Contact
              </a>
            </li>
            </Link>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
