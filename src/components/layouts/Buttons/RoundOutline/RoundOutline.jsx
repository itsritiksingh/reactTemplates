import React from 'react'
import './RoundOutline.css'

export function RoundOutline({value,type}) {
    return (
        <>
            <button className={`r-out ${type}`}>{value}</button>   
        </>
    )
}
