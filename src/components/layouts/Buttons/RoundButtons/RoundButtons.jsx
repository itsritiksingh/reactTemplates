import React from 'react'
import './RoundButtons.css'

export function RoundButtons({value,type,text}) {
    return (
        <>
            <button className={`${value} ${type}`}>{text}</button>
        </>
    )
}
