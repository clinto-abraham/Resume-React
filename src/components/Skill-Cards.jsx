import React from 'react';

export const SkillCards = (props) => (
        <div className={props.a}>
                <img 
                  className={props.b} 
                  src={props.c} 
                  alt={props.d} 
                />
                <h3>{props.skill}</h3>
                <p>{props.description} </p>
        </div>
)