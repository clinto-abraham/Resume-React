import React from 'react'

export const Footer = (props) => (
    <div className="bottom-container">
        <a className={props.x1} href={props.x2}>
            <img src={props.i1} alt={props.i2} />
            {props.a}
        </a>   
    </div>
)