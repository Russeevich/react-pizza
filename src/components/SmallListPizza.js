import React, {useContext, useState, useEffect} from 'react'
import { CounterContext } from './../context/CounterContext';

export const SmallListPizza = () => {

    const {Delete,state} = useContext(CounterContext)

    const [obj, setObj] = useState([])

    const click = (index) => {
        Delete(index)
    }

    useEffect(()=> {
      var tmp = state
      .filter((item, index) => state.indexOf(item) === index)
      .map(pizza => {
            let count = 0
            state.forEach((items) => {
                if(items.name === pizza.name)
                count++
            })
            pizza.count = count
            return pizza
        }
       )

       setObj(tmp)
        // eslint-disable-next-line
    }, [state])

    if(!state.length)
        return null

    return (
    <ul>
       {
       obj.map((item,i) => 
       <li key={i}>{item.name} x {item.count} <button onClick={() => click(item)}>-</button></li>
       )}
    </ul>
    )
}