import React, {useContext} from 'react'
import { CounterContext } from '../context/CounterContext'

export const Pizza = ({items}) => {

    const {Update} = useContext(CounterContext)

    const Click = event => {
        event.preventDefault()
        Update(items)
        localStorage.setItem('cost', JSON.parse(localStorage.getItem('cost'))+items.cost)
    }

    return(
    <div className="card pizza">
            <div className="card-body">
            <h5 className="card-title">{items.name}</h5>
                <div className="d-flex flex-column">
                    <div className="overflow-hidden">
                        <img className="w-50" src={items.img} alt=""/>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>Р {items.cost}</div>
                        <button onClick={Click} className="btn btn-primary">Добавить</button>
                    </div>
                </div>
            </div>
    </div>
    )
}