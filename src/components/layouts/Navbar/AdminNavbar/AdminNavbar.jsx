import React, { useEffect } from "react";
import "./AdminNavbar.css";

export const AdminNavbar = ({ children }) => {
  useEffect(() => {
    var link = document.querySelectorAll("._adminSide .link");

    link.forEach((val) => {
      val.addEventListener("mouseup", () => {
        val.children[0].classList.toggle("active");
      });
    });

    var menu = document.querySelector("._mainNav_menu");
    menu.addEventListener("mouseup", () => {
      document.querySelector("._adminSide").classList.toggle("active");
    });

    return () => {
      menu.removeEventListener('mouseup',()=>{});
      link.forEach((val) => {
        val.addEventListener("mouseup", () => {
          val.children[0].classList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <div className="_mainNav">
      <div className="_mainNav_menu">&#x2630;</div>
      <div className="_mainNav_child">{children}</div>
    </div>
  );
};

export const Left = ({ children }) => {
  return <ul className="leftUl">{children}</ul>;
};

export const Right = ({ children }) => {
  return <ul className="rightUl">{children}</ul>;
};

export const SideNav = ({ children, style }) => {
  return (
    <div className="_adminSide" style={style}>
      {children}
    </div>
  );
};
