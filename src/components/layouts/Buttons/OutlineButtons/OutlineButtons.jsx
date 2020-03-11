import React from 'react'
import './OutlineButtons.css'
export function OutlineButtons({value,type,style,...rest}) {
    return (
        <>
            <button {...rest} className={`outline ${type}`} style={style}>{value}</button>
        </>
    )
}
