import React,{useContext} from 'react'
import { CounterContext } from '../context/CounterContext'
import { SmallListPizza } from './SmallListPizza';

export const Counter = () => {

    const {state} = useContext(CounterContext)
    
    //JSON.parse(localStorage.getItem('cost'))
    
    return (
        <div className="counter">
            <div className="card mr-3">
                    <div className="card-body text-dark bg-gray">
                        <div className="card-title counter__items">
                            <div className="counter__input">
                                Р {state.reduce((acc, item) =>  { return acc + item.cost},0)}
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