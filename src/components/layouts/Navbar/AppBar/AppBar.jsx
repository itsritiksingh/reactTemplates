import React, { useEffect } from "react";
import "./AppBar.css";

export const AppBar = ({children}) => {
  useEffect(() => {
    const dropdownLink = document.querySelector("nav.AppBar li.dropDownLink");
    const menu = document.querySelector("nav.AppBar li.menu");

    dropdownLink.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownLink.lastElementChild.classList.toggle("active");
    });

    menu.addEventListener("click", () => {
      console.log("logged");
      document.querySelector("nav.AppBar ul").classList.toggle("toggle");
    });

    return () => {
      dropdownLink.removeEventListener("click", () => {});
      menu.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <nav className="AppBar">
      <ul>
       {children}
        <li className="menu">&#x2630;</li>
      </ul>
    </nav>
  );
};
