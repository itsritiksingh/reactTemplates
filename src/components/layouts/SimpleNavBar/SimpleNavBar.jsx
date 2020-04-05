import React from 'react'
import './SimpleNavBar.css'
export const SimpleNavBar = ({style,children}) => {
    return (
        <>
           <nav  className="gridNav" style={style}>
               <ul>
                   {
                    //    Object.keys(link).map((val,index,arr)=>{

                    //       return( <li className={index < arr.length /2 ? 'order1': 'order2'}>
                    //           <Link to={link[val].link}>
                    //            {val}
                    //           </Link> 
                    //        </li>
                    //       )
                    //    })
                    children
                   }
               </ul>
           </nav>
        </>
    )
}
