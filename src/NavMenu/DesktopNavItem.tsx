import React from "react";

import { Link } from "react-router-dom";
import { NavMenuDataType } from "./NavMenuData";

type DesktopNavItemProps = {
  index: number;
  item: NavMenuDataType;
};

const DesktopNavItem = ({ index, item }: DesktopNavItemProps) => {
  return (
    <li key={index} className={item.cName}>
      <Link to={item.path}>
        {item.icon}
        <span>{item.title}</span>
      </Link>
    </li>
  );
};

export default DesktopNavItem;
