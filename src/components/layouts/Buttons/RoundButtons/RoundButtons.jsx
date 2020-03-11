import React from 'react'
import './RoundButtons.css'

export function RoundButtons({value,type,style,...rest}) {
    return (
        <>
            <button {...rest} className={`round ${type}`} style={style} >{value}</button>
        </>
    )
}
