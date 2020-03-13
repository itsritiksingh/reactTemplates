import React, { useEffect } from "react";
import "./HeaderWithRightNav.css";
import { Link } from "react-router-dom";

export const HeaderWithRightNav = ({ link }) => {
  useEffect(() => {
    document
      .querySelector("header.HeaderWithRightNav .menu")
      .addEventListener("click", () => {
        var nav = document
          .querySelector("header.HeaderWithRightNav nav")
        nav.classList.toggle("active");
        // var menu = document.querySelector("header.HeaderWithRightNav .menu");
        document.querySelector("header.HeaderWithRightNav .menu").innerHTML = nav.classList.contains('active') ? '&times;': '&#x2630;';
      //  if(nav.classList.contains('active')){
      //    menu.innerHTML = '&times;';
      //  }
      });
  }, []);
  return (
    <>
      <header className="HeaderWithRightNav">
        <div className="menu">&times;</div>
        <nav>
          {Object.keys(link).map((val, index, arr) => {
            return (
              <li>
                <Link to={link[val].link}>{val}</Link>
              </li>
            );
          })}
        </nav>
      </header>
    </>
  );
};
