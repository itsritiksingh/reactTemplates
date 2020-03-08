import React from 'react'
import './RoundOutline.css'

export function RoundOutline({value,type,text}) {
    return (
        <>
            <button className={`${value} ${type}`}>{text}</button>   
        </>
    )
}
