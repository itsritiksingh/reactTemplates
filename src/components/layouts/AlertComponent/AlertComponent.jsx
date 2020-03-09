import React from 'react'
import './AlertComponent.css'

export function AlertComponent({color,children}) {
    return (
        <>
            <div className={`alert ${color}`}>{children}</div>
        </>
    )
}
