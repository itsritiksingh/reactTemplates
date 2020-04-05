import React from 'react'
import './Container.css';
export const Container = ({style,children,padding,margin,textAlign,flex,justifyContent,alignItems,flexDirection}) => {

    return (
        <div className="_container" style={{display :flex? 'flex':null,justifyContent,alignItems,flexDirection,textAlign, padding,margin,...style}}>
            {children}
        </div>
    )
}
