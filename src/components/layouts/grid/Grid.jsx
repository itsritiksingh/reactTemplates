import React from 'react'
import './Grid.css';
export const Grid = ({type,children,style}) => {
    
    return (
        <div className={type} style={style}>
            {children}
        </div>
    )
}