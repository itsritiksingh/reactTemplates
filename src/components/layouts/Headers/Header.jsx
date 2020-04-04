import React from 'react'
import './Header.css'

export const Header = ({height,children,style,background}) => {
    return (
        <header style={{height: height,backgroundImage: `url(${background})`,...style}}>
            {children}
        </header>
    )
}
