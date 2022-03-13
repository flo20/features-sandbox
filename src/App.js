import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./styles.css";

export default function App() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleToggle = () => {
    setOpenHamburger(!openHamburger);
  };

  return (
    <div className="wrap">
      <div>
        <Link to="/" id="logo">
          LOGO
        </Link>
      </div>

      <div className={openHamburger ? "head active" : "head"}>
        <div className="navMenu">
          <Link to="/item1" className="links">
            Menu Item 1
          </Link>
        </div>
        <div className="navMenu">
          <Link to="/item2" className="links">
            Menu Item 2
          </Link>
        </div>
      </div>
      {openHamburger ? (
        <GrClose className="hamburgerMenu" onClick={handleToggle} />
      ) : (
        <GiHamburgerMenu className="hamburgerMenu" onClick={handleToggle} />
      )}
    </div>
  );
}
