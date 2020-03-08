import React from 'react'
import './GradientButtons.css'

export function GradientButtons({ value, type }) {
    return (
      <>
        <button className={`${value} ${type}`}>{type}</button>
      </>
    );
}   