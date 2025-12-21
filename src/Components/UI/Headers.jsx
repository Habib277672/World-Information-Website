import { NavLink } from "react-router-dom";
import { BsMenuButtonWide } from "react-icons/bs";
import { useState } from "react";

export const Headers = () => {
  const [show, setShow] = useState(false);
  const handleButtonToogle = () => {
    return setShow(!show);
  };

  return (
    <header>
      <div className="contanier">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/" className="navlinks">
              <h1 className="logo">World Info</h1>
            </NavLink>
          </div>

          <nav className={`menu-mobile ${show ? "show" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" className="navlinks">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navlinks">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" className="navlinks">
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navlinks">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button className="menu-btn" onClick={handleButtonToogle}>
              <BsMenuButtonWide />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
