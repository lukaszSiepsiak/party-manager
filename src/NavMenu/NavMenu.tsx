import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import "./NavMenu.css";

import { NavMenuData } from "./NavMenuData";
import DesktopNavItem from "./DesktopNavItem";

const NavMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSidebar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <div>
      <div className="nav-bar">
        {!isSideBarOpen ? (
          <Link to="#" className="nav-bar-hamburger-link">
            <FaIcons.FaBars onClick={toggleSidebar}></FaIcons.FaBars>
          </Link>
        ) : (
          <Link to="#" className="nav-menu-bar-close-link">
            <AiIcons.AiOutlineClose
              onClick={toggleSidebar}
            ></AiIcons.AiOutlineClose>
          </Link>
        )}
      </div>
      <nav className={isSideBarOpen ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-ul" onClick={toggleSidebar}>
          {NavMenuData.map((item, index) => (
            <DesktopNavItem
              key={index}
              item={item}
              index={index}
            ></DesktopNavItem>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
