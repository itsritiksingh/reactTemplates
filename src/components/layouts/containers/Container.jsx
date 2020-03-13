import React from 'react'
import './Container.css';
export const Container = ({style,children,padding = 7.5}) => {

    return (
        <div className="_container" style={{...style,...{padding: padding+'rem'}}}>
            {children}
        </div>
    )
}
