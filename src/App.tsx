import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

function App() {

    const [textMessage, setTextMessage] = useState<string | null>('Set values and enter "set"');
    const [startCount, setStartCount] = useState<number>(0);
    const [maxCount, setMaxCount] = useState<number>(1);
    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        localStorage.setItem('startCount', JSON.stringify(startCount));
        localStorage.setItem('maxCount', JSON.stringify(maxCount));
    }, [startCount, maxCount]);

    const changeMaxValue = (value: number) => {
        setMaxCount(value);
    }

    const changeStartValue = (value: number) => {
        setStartCount(value);
        setCount(value);
    }

    return (
        <div className="App">
            <Settings
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                setError={setError}
                setTextMessage={setTextMessage}
                error={error}
            />
            <Counter
                textMessage={textMessage}
                count={count}
                setCount={setCount}
                maxCount={maxCount}
                error={error}
                startCount={startCount}
            />
        </div>
    );
}

export default App;
