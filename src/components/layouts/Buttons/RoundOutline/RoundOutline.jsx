import React from 'react'
import './RoundOutline.css'

export function RoundOutline({value,type,...rest}) {
    return (
        <>
            <button {...rest} className={`r-out ${type}`}>{value}</button>   
        </>
    )
}
