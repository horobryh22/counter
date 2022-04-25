import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

function App() {

    const [startCount, setStartCount] = useState<number>(0);
    const [maxCount, setMaxCount] = useState<number>(1);
    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState<string | null>('');

    const changeMaxValue = (value: number) => {
        const maxValue = Number(value);
        setMaxCount(maxValue);
    }

    const changeStartValue = (value: number) => {
        setStartCount(value);
        setCount(value);
    }

    console.log(startCount, maxCount, count);

    return (
        <div className="App">
            <Settings changeMaxValue={changeMaxValue} changeStartValue={changeStartValue} setError={setError} error={error}/>
            <Counter count={count} setCount={setCount} maxCount={maxCount} error={error} startCount={startCount}/>
        </div>
    );
}

export default App;
