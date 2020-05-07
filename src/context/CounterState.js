import React, { useState } from 'react'
import { CounterContext } from './CounterContext'

export const CounterState = ({children}) => {

    const [state, setState] = useState([])

    const Update = item => {
        setState([...state, item])
    }

    const Delete = items => {
        var tmp = state.filter((_,i) => i !== state.indexOf(items))
        setState(tmp)
    }

    return (
        <CounterContext.Provider value={{Update,Delete,state}}>
            {children}
        </CounterContext.Provider>
    )
}