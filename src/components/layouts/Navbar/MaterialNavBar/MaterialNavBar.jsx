import React, { useEffect } from "react";
import "./MaterialNavBar.css";
import { Link } from "react-router-dom";
export const MaterialNavBar = ({ link }) => {
  useEffect(() => {
    const dropdownLink = document.querySelector("nav.MaterialNavBar li.dropdownLink");
    const menu = document.querySelector("nav.MaterialNavBar li.menu");

    dropdownLink.addEventListener("click", e => {
      e.preventDefault();
      dropdownLink.lastElementChild.classList.toggle("active");
    });

    menu.addEventListener("click", () => {
      document
        .querySelector("nav.MaterialNavBar ul")
        .classList.toggle("toggle");
    });

    return () => {
      dropdownLink.removeEventListener("click", () => {});
      menu.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
      <nav className="MaterialNavBar">
        <ul>
          {Object.keys(link).map((val, index) => {
            return (
              <li
                key={index}
                className={
                  index === 0
                    ? "logo"
                    : index === 1
                    ? "active"
                    : "child" in link[val]
                    ? "dropdownLink"
                    : null
                }
              >
                <Link to={"/"}>{val}</Link>
                {"child" in link[val] ? (
                  <div className="dropdown">
                    {Object.keys(link[val].child).map((val, index) => {
                      return <Link key={index}> {val} </Link>;
                    })}
                  </div>
                ) : null}
              </li>
            );
          })}
          <li className="form">
          <form action="">
            <input type="text" name="search" placeholder="Search" />
          </form>
          </li>
          <li className="menu"> &#x2630;</li>
        </ul>
      </nav>
    </>
  );
};
