import React from 'react'
import {SimpleNavBar} from '../layouts/SimpleNavBar/SimpleNavBar';
import {NavbarResponsive} from '../layouts/Navbar/NavbarResponsive/NavbarResponsive.jsx';
import { MaterialNavBar } from '../layouts/Navbar/MaterialNavBar/MaterialNavBar';
import {AppBar} from '../layouts/Navbar/AppBar/AppBar'
 export const NavBar = () => {
    return (
        <>
        <p>SimpleNavBar</p>
           <SimpleNavBar link={{
          logo: {link: "/"},
          Home: { link: "/" },
          "About Us": { link: "/aboutus" },
          Menu: { link: "/menu" },
          "Banquet facility": { link: "/banquet" },
          photos: {link: "/gallery"},
          Catering: {link : "/catering"}
        }}/> 

         <br />
         <hr />
         <br />
         <form action=""></form>
 <p>NavbarResponsive</p>
<NavbarResponsive link={{
          logo: {link: "/"},
          Home: { link: "/" },
          "About Us": { link: "/aboutus" },
          Menu: { link: "/menu" },
          "Banquet facility": { link: "/banquet" },
          Gallery: {link: "/gallery"},
          Catering: {link : "/catering"}
        }}
        style={{padding: '0 40px'}}
        /> 
            <br />
         <hr />
         <br />
         <p>MaterialNavBar</p>
        <MaterialNavBar
        link={{
          logo: {link: "/"},
          Home: { link: "/" },
          "About Us": { link: "/aboutus" },
          Menu: { link: "/menu" },
          Dropdown: {link : "/catering", child: {
            Link1: "/",
            Link2: "/",
            Link3: "/"
          }}
        }}
        />
        <p> Uncompleted</p>
        <ul>
          <li>
            Usage : {'<nameOfNavbar link/>'}
             <li> link = object if link text and link address and may contain a child in case of dropdown</li>
          </li>
          example: {`link={{
          logo: {link: "/"},
          Home: { link: "/" },
          "About Us": { link: "/aboutus" },
          Menu: { link: "/menu" },
          Dropdown: {link : "/catering", child: {
            Link1: "/",
            Link2: "/",
            Link3: "/"
          }}
        }}
        `}
        <br/>
        or 
        <br/>
        link : {`link={{
          logo: {link: "/"},
          Home: { link: "/" },
          "About Us": { link: "/aboutus" },
          Menu: { link: "/menu" },
          "Banquet facility": { link: "/banquet" },
          Gallery: {link: "/gallery"},
          Catering: {link : "/catering"}
        }}`}
        </ul>
        
        <AppBar >
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
        <li className="dropDownLink">
          <a href="/">drop</a> 
          <ul>
            <li>
              <a href="/">second</a>
            </li>
            <li>
              <a href="/">second</a>
            </li>
            <li>
              <a href="/">second</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">first</a>
        </li>
        </AppBar>
        </> 
    )
}





