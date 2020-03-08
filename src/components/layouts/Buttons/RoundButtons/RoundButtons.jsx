import React from 'react'
import './RoundButtons.css'

export function RoundButtons({value,type,style}) {
    return (
        <>
            <button className={`round ${type}`} style={style} >{value}</button>
        </>
    )
}
