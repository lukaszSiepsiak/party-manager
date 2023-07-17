import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import "./NavMenu.css";

import { NavMenuData } from "./NavMenuData";
import DesktopNavItem from "./DesktopNavItem";

const NavMenu = () => {
  return (
    <div>
      <div className="nav-bar">
        <h1 className="nav-bar-title">Anonymous Santa</h1>
      </div>
      <nav className={"nav-menu active"}>
        <ul className="nav-menu-ul">
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
