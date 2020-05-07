import React from 'react'
import { Pizza } from './Pizza'

export const PizzaList = ({state}) => {
    return( 
        <div className="container d-flex flex-wrap pt-5">
            {state.map(item => {return <Pizza key={item.name} items={item}/>})}
        </div>
    )
}