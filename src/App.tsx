import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

function App() {

    const [count, setCount] = useState<number>(0);

    return (
        <div className="App">
            <Counter count={count} setCount={setCount}/>
        </div>
    );
}

export default App;
