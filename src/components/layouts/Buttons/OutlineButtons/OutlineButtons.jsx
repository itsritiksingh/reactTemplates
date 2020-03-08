import React from 'react'
import './OutlineButtons.css'
export function OutlineButtons({value,type,style}) {
    return (
        <>
            <button className={`outline ${type}`} style={style}>{value}</button>
        </>
    )
}
