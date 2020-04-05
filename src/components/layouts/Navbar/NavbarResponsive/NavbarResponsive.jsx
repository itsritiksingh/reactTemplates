import React, { useEffect } from "react";
import "./Navbar.css";

export const NavbarResponsive = ({ children,style }) => {
  
  useEffect(() => {
    const toggleActive = e => {

      var li = document.querySelectorAll("nav ul li a");

      li.forEach(li => {
        if (li.classList.contains("active")) li.classList.remove("active");
      });

      if (!e.target.classList.contains("logo"))
       e.target.classList.add('active');
    };

    var nav_ul = document.querySelector("nav.NavbarResponsive ul");
    var li_menu = document.querySelector("nav.NavbarResponsive ul li.menu");

    li_menu.addEventListener('click',()=>{
        document.querySelector('nav.NavbarResponsive ul').classList.toggle('drop');
    });

    nav_ul.addEventListener("mouseover", toggleActive);
    nav_ul.addEventListener("click", toggleActive);

    return () => {
      nav_ul.removeEventListener("mouseover", () => {});
      nav_ul.removeEventListener("click", () => {});
    };
  }, []);

  // const loadNavbar = ()=>{
  //      for (const key in link) {

  //     }
  // }

  return (
    <nav className="NavbarResponsive" style={style}>
      <ul>
        <li className="menu"> &#x2630;</li>
        {/* {Object.keys(link).map((val, index, arr) => {
          return (
            <li
              className={
                index === 0
                  ? "logo"
                  : index === 1
                  ? "item"
                  : index === arr.length - 1
                  ? "button"
                  : "item"
              }
            >
              <Link to={link[val].link}>{val}</Link>
            </li>
          );
        })} */}

        {children}
      </ul>
    </nav>
  );
};
