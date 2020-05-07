import React from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Counter } from './components/Counter';
import { PizzaList } from './components/PizzaList';
import { CounterState } from './context/CounterState';

function App() {

  const state = [
    {name:'Пеперони', cost:127, count: 1},
    {name:'BBQ', cost:257, count: 1}
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
