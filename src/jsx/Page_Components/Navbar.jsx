import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import Hamburger from "hamburger-react";

import "../../styles/css/navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [hamMenuVisibility, setHamMenuVisibility] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    navRef.current.classList.add("slide-in-nav");
  }, []);

  const showDropdown = () => {
    setIsDropdownOpen(true);
  };

  const showSubDropdown = () => {
    setIsSubDropdownOpen(true);
  };

  const hideBothDropdown = () => {
    setIsDropdownOpen(false);
    setIsSubDropdownOpen(false);
  };

  const hideSubDropdown = () => {
    setIsSubDropdownOpen(false);
  };

  const toggleHamMenuVis = () => {
    setHamMenuVisibility(!hamMenuVisibility);
  };

  return (
    <nav className="navbar">
      <div className="navbar--container" ref={navRef}>
        <div className="navbar--hamburger">
          <Hamburger
            toggled={hamMenuVisibility}
            toggle={toggleHamMenuVis}
            size="24"
            color="#FFFFFF"
          ></Hamburger>
        </div>
        <NavLink className="navbar--title" to="/">
          Ingrid
          <span className="navbar--container--title--surname">Lindemann</span>
        </NavLink>
        <ul className="navbar--menu">
          <div
            className="navbar--dropdown"
            onMouseEnter={showDropdown}
            onMouseLeave={hideBothDropdown}
          >
            <div className="navbar--item">Kunst</div>
            {isDropdownOpen && (
              <ul className="navbar--dropdown--menu">
                <div className="navbar--dropdown--item">
                  <NavLink
                    onClick={hideBothDropdown}
                    className="navbar--item"
                    to="/wood"
                  >
                    Holz
                  </NavLink>
                </div>
                <div
                  onMouseEnter={showSubDropdown}
                  onMouseLeave={hideSubDropdown}
                >
                  <div className="navbar--item">Stein</div>
                  {isSubDropdownOpen && (
                    <ul className="navbar--sub--dropdown--menu">
                      <li className="navbar--sub--dropdown--item">
                        <NavLink
                          onClick={hideBothDropdown}
                          className="navbar--item"
                          to="/limestone"
                        >
                          Kalkstein
                        </NavLink>
                      </li>
                      <li className="navbar--sub--dropdown--item">
                        <NavLink
                          onClick={hideBothDropdown}
                          className="navbar--item"
                          to="/granite"
                        >
                          Granit
                        </NavLink>
                      </li>
                      <li className="navbar--sub--dropdown--item">
                        <NavLink
                          onClick={hideBothDropdown}
                          className="navbar--item"
                          to="/marble"
                        >
                          Marmor
                        </NavLink>
                      </li>
                      <li className="navbar--sub--dropdown--item">
                        <NavLink
                          onClick={hideBothDropdown}
                          className="navbar--item"
                          to="/sandstone"
                        >
                          Sandstein
                        </NavLink>
                      </li>
                      <li className="navbar--sub--dropdown--item">
                        <NavLink
                          onClick={hideBothDropdown}
                          className="navbar--item"
                          to="/alabaster"
                        >
                          Alabaster
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
                <li className="navbar--dropdown--item">
                  <NavLink
                    onClick={hideBothDropdown}
                    className="navbar--item"
                    to="/clay"
                  >
                    Ton
                  </NavLink>
                </li>
                <li className="navbar--dropdown--item">
                  <NavLink
                    onClick={hideBothDropdown}
                    className="navbar--item"
                    to="/caststone"
                  >
                    Guss
                  </NavLink>
                </li>
                <li className="navbar--dropdown--item">
                  <NavLink
                    onClick={hideBothDropdown}
                    className="navbar--item"
                    to="/painting"
                  >
                    Malerei
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <li>
            <NavLink
              onClick={hideBothDropdown}
              className="navbar--item"
              to="/exhibition"
            >
              Ausstellungen
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={hideBothDropdown}
              className="navbar--item"
              to="/about"
            >
              Über mich
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={hideBothDropdown}
              className="navbar--item"
              to="/contact"
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`navbar--hamburgermenu ${hamMenuVisibility ? "show" : ""}`}
      >
        <div
          className={`navbar--hamburgermenu--dropdown ${
            hamMenuVisibility ? "show" : ""
          }`}
        >
          <div
            className={`navbar--hamburgermenu--dropdown--button ${
              hamMenuVisibility ? "show" : ""
            }`}
          >
            Kunst
          </div>
          <div
            className={`navbar--hamburgermenu--dropdown--content ${
              hamMenuVisibility ? "show" : ""
            }`}
          >
            <div
              className={`navbar--hamburgermenu--dropdown--content--row  ${
                hamMenuVisibility ? "show" : ""
              }`}
            >
              <div
                className={`navbar--hamburgermenu--dropdown--content--row--verticalline ${
                  hamMenuVisibility ? "show" : ""
                }`}
              ></div>
              <div
                className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                  hamMenuVisibility ? "show" : ""
                }`}
              ></div>
              <NavLink
                onClick={toggleHamMenuVis}
                className={`navbar--hamburgermenu--dropdown--content--row--item ${
                  hamMenuVisibility ? "show" : ""
                }`}
                to="/wood"
              >
                Holz
              </NavLink>
            </div>
            <div>
              <div className="navbar--hamburgermenu--dropdown--content--row">
                <div
                  className={`navbar--hamburgermenu--dropdown--content--row--verticalline ${
                    hamMenuVisibility ? "show" : ""
                  }`}
                ></div>
                <div
                  className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                    hamMenuVisibility ? "show" : ""
                  }`}
                ></div>
                <div
                  className={`navbar--hamburgermenu--dropdown--content--row--item ${
                    hamMenuVisibility ? "show" : ""
                  }`}
                >
                  Stein
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{ "margin-left": "1.6rem" }}
                  className="navbar--hamburgermenu--dropdown--content--row--verticalline--big"
                ></div>
                <div style={{ "margin-left": "0.8rem" }}>
                  <div className="navbar--hamburgermenu--dropdown--content--row">
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--verticalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <NavLink
                      onClick={toggleHamMenuVis}
                      className={`navbar--hamburgermenu--dropdown--content--row--item ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                      to="/limestone"
                    >
                      Kalkstein
                    </NavLink>
                  </div>
                  <div className="navbar--hamburgermenu--dropdown--content--row">
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--verticalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <NavLink
                      onClick={toggleHamMenuVis}
                      className={`navbar--hamburgermenu--dropdown--content--row--item ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                      to="/granite"
                    >
                      Granit
                    </NavLink>
                  </div>
                  <div className="navbar--hamburgermenu--dropdown--content--row">
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--verticalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <NavLink
                      onClick={toggleHamMenuVis}
                      className={`navbar--hamburgermenu--dropdown--content--row--item ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                      to="/marble"
                    >
                      Marmor
                    </NavLink>
                  </div>
                  <div className="navbar--hamburgermenu--dropdown--content--row">
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--verticalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <NavLink
                      onClick={toggleHamMenuVis}
                      className={`navbar--hamburgermenu--dropdown--content--row--item ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                      to="/sandstone"
                    >
                      Sandstein
                    </NavLink>
                  </div>
                  <div className="navbar--hamburgermenu--dropdown--content--row">
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--verticalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <div
                      className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                    ></div>
                    <NavLink
                      onClick={toggleHamMenuVis}
                      className={`navbar--hamburgermenu--dropdown--content--row--item ${
                        hamMenuVisibility ? "show" : ""
                      }`}
                      to="/alabaster"
                    >
                      Alabaster
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar--hamburgermenu--dropdown--content--row">
              <div
                className={`navbar--hamburgermenu--dropdown--content--row--verticalline ${
                  hamMenuVisibility ? "show" : ""
                }`}
              ></div>
              <div
                className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                  hamMenuVisibility ? "show" : ""
                }`}
              ></div>
              <NavLink
                onClick={toggleHamMenuVis}
                className={`navbar--hamburgermenu--dropdown--content--row--item ${
                  hamMenuVisibility ? "show" : ""
                }`}
                to="/clay"
              >
                Ton
              </NavLink>
            </div>
            <div className="navbar--hamburgermenu--dropdown--content--row">
              <div
                className={`navbar--hamburgermenu--dropdown--content--row--verticalline ${
                  hamMenuVisibility ? "show" : ""
                }`}
              ></div>
              <div
                className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                  hamMenuVisibility ? "show" : ""
                }`}
              ></div>
              <NavLink
                onClick={toggleHamMenuVis}
                className={`navbar--hamburgermenu--dropdown--content--row--item ${
                  hamMenuVisibility ? "show" : ""
                }`}
                to="/caststone"
              >
                Guss
              </NavLink>
            </div>
            <div className="navbar--hamburgermenu--dropdown--content--row">
              <div
                className={`navbar--hamburgermenu--dropdown--content--row--verticalline--last ${
                  hamMenuVisibility ? "show" : ""
                }`}
              ></div>
              <div
                className={`navbar--hamburgermenu--dropdown--content--row--horizontalline ${
                  hamMenuVisibility ? "show" : ""
                }`}
              ></div>
              <NavLink
                onClick={toggleHamMenuVis}
                className={`navbar--hamburgermenu--dropdown--content--row--item ${
                  hamMenuVisibility ? "show" : ""
                }`}
                to="/painting"
              >
                Malerei
              </NavLink>
            </div>
          </div>
        </div>
        <NavLink
          onClick={toggleHamMenuVis}
          className={`navbar--hamburgermenu--item ${
            hamMenuVisibility ? "show" : ""
          }`}
          to="/exhibition"
        >
          Ausstellungen
        </NavLink>
        <NavLink
          onClick={toggleHamMenuVis}
          className={`navbar--hamburgermenu--item ${
            hamMenuVisibility ? "show" : ""
          }`}
          to="/about"
        >
          Über mich
        </NavLink>
        <NavLink
          onClick={toggleHamMenuVis}
          className={`navbar--hamburgermenu--item ${
            hamMenuVisibility ? "show" : ""
          }`}
          to="/contact"
        >
          Kontakt
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
