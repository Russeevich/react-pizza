import React,{useContext,useState, useEffect} from 'react'
import { CounterContext } from '../context/CounterContext'
import { SmallListPizza } from './SmallListPizza';

export const Counter = () => {

    const {state} = useContext(CounterContext)
    const [value, setValue] = useState(0)
    
    //JSON.parse(localStorage.getItem('cost'))

    useEffect(() => {
        setValue(state.reduce((acc, item) =>  { return acc + item.cost},0))
        // eslint-disable-next-line
    }, [state])
    
    return (
        <div className="counter">
            <div className="card mr-3">
                    <div className="card-body text-dark bg-gray">
                        <div className="card-title counter__items">
                            <div className="counter__input">
                                Р {value}
                            </div>   
                            <button className="counter__input bg-danger text-light">Мои заказы</button>  
                        </div>
                        <hr></hr>
                        <SmallListPizza/>
                    </div>
            </div>
        </div>
    )
}