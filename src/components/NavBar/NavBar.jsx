import React from 'react'
import {SimpleNavBar} from '../layouts/SimpleNavBar/SimpleNavBar';
import {NavbarResponsive} from '../layouts/NavbarResponsive/NavbarResponsive.jsx';
import { MaterialNavBar } from '../layouts/MaterialNavBar/MaterialNavBar';
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
          Gallery: {link: "/gallery"},
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
        }}/> 
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
        </> 
    )
}





