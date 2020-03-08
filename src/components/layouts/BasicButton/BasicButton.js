import React from 'react'

export function BasicButton({value,type}) {
    return (
        <>
            <button className={`basic ${type}`}>{value}</button>      
        </>
    )
}
