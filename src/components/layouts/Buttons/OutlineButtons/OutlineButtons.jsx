import React from 'react'
import './OutlineButtons.css'
export function OutlineButtons({value,type,text}) {
    return (
        <>
            <button className={`${value} ${type}`}>{text}</button>
        </>
    )
}
