import React from "react";
import "./Headers.css";
import {Header} from '../layouts/Headers/Header';
import {RightNav} from '../layouts/Navbar/RightNav/RightNav';

export const Headers = () => {
  return (
    <>
      <Header height="100vh" backgroundImage="url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80') ">
        <RightNav>
        <li className="logo">
          <a href="/">LOGO</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        </RightNav>
      </Header>
    </>
  );
};
