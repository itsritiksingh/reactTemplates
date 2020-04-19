import React from 'react'
import './Container.css';
export const Container = ({style,children,padding,margin,textAlign}) => {

    return (
        <div className="_container" style={{textAlign, padding,margin,...style}}>
            {children}
        </div>
    )
}
