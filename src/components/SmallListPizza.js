import React, {useContext} from 'react'
import { CounterContext } from './../context/CounterContext';

export const SmallListPizza = () => {

    const {Delete,state} = useContext(CounterContext)

    const click = (index) => {
        Delete(index)
    }

    if(!state.length)
        return null

    return (
    <ul>
       {
       state
       .filter((item, index) => state.indexOf(item) === index)
       .map((item,i) => 
       <li key={i}>{item.name} x {state.reduce((acc,items)=>{
           if(items.name === item.name) 
                acc++
           return acc
        },0)} <button onClick={() => click(item)}>-</button></li>
       )}
    </ul>
    )
}