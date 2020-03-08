import React from 'react'
import './Grid.css';
export const Grid = ({type,children}) => {
    
    return (
        <div className={type}>
            {children}
        </div>
    )
}
