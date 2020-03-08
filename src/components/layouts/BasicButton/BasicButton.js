import React from 'react'

export function BasicButton({value,type}) {
    return (
        <>
            <button className={`basi ${type}`}>{value}</button>      
        </>
    )
}
