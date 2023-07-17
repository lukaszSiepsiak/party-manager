import React, { ReactElement } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export type NavMenuDataType = {
  title: string;
  path: string;
  icon: ReactElement;
  cName: string;
};

export const LoggedInNavMenuData: NavMenuDataType[] = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-menu-li-link-item",
  },
  {
    title: "Events",
    path: "/events",
    icon: <IoIcons.IoMdCalendar />,
    cName: "nav-menu-li-link-item",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaIcons.FaUser />,
    cName: "nav-menu-li-link-item",
  },
];

export const NotLoggedInNavMenuData: NavMenuDataType[] = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-menu-li-link-item",
  },
  {
    title: "Sign In",
    path: "/signin",
    icon: <FaIcons.FaSignInAlt />,
    cName: "nav-menu-li-link-item",
  },
  {
    title: "Sign Up",
    path: "/signup",
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: "nav-menu-li-link-item",
  },
];
