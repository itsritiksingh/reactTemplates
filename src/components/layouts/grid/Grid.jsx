import React from 'react'
import './Grid.css';
import {Typography} from '../Typography/Typography'
export const Grid = ({type,children,style}) => {
    
    return (
        <div className={type} style={style}>
            <Typography className="p my-5" align="right">
                {children}
            </Typography>
        </div>
    )
}