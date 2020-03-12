import React, { useEffect } from "react";
import "./HeaderWithRightNav.css";
import { Link } from "react-router-dom";

export const HeaderWithRightNav = ({ link }) => {
  useEffect(() => {
    document
      .querySelector("header.HeaderWithRightNav .menu")
      .addEventListener("click", () => {
        document
          .querySelector("header.HeaderWithRightNav nav")
          .classList.toggle("active");
      });
  }, []);
  return (
    <>
      <header className="HeaderWithRightNav">
        <div className="menu">&#x2630;</div>
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
      <header className="HeaderWithRightNav"></header>
    </>
  );
};
