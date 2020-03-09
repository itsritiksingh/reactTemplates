import React from 'react'
// import propTypes from './prop'
import './Input.css';
export const Input = ({type,placeholder,options}) => {
    return (
        <input type={type} placeholder={placeholder} {...options} />
        
    )
}
