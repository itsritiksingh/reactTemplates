import React from 'react'

export const Line = ({color,width,style}) => {
    return (
        <div style={{backgroundColor: color? color : 'black',width : width ? width: '90%',...{height: '1px'},...style}}>
            
        </div>
    )
}
