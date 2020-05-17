import React from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Counter } from './components/Counter';
import { PizzaList } from './components/PizzaList';
import { CounterState } from './context/CounterState';

function App() {

  const state = [
    {name:'Пеперони', cost:127, img:"https://www.timspizza.ru/upload/goods/24a710c84f.jpg"},
    {name:'BBQ', cost:257},
    {name:'Сырная', cost:350}
  ]

  return (
    <CounterState>
        <div>
            <Counter/>
            <Header/>
            <Navbar/>
            <PizzaList state={state}/>
        </div>
    </CounterState>
  );
}

export default App;
