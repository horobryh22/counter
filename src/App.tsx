import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

function App() {

    const [maxValue, setMaxValue] = useState<number>(1);
    const [startValue, setStartValue] = useState<number>(0);
    const [count, setCount] = useState<number>(0);

    console.log(maxValue, startValue);

    return (
        <div className="App">
            <Settings setMaxValue={setMaxValue} setStartValue={setStartValue} maxValue={maxValue} startValue={startValue}/>
            <Counter count={count} setCount={setCount} maxValue={maxValue} startValue={startValue}/>
        </div>
    );
}

export default App;
