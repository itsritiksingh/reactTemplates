import React from 'react'
import './Container.css';
export const Container = ({style,children}) => {

    return (
        <div className="_container" style={{...style}}>
            {children}
        </div>
    )
}
