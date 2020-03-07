import React from 'react'
import './SimpleNavBar.css'
import {Link} from 'react-router-dom';
export const SimpleNavBar = ({link,style}) => {
    return (
        <>
           <nav  className="gridNav" style={style}>
               <ul>
                   {
                       Object.keys(link).map((val,index,arr)=>{

                          return( <li className={index < arr.length /2 ? 'order1': 'order2'}>
                              <Link to={link[val].link}>
                               {val}
                              </Link> 
                           </li>
                          )
                       })
                   }
               </ul>
           </nav>
        </>
    )
}
