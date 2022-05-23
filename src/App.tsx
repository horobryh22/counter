import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from './redux/store';
import {MainCountsType, MessagesType, setCountAC, setMaxCountAC, setStartCountAC} from './redux/counter-reducer';

function App() {

    const startCount = useSelector<StateType, number>(state => state.counter.mainCounts.startCount);
    const maxCount = useSelector<StateType, number>(state => state.counter.mainCounts.maxCount);

    useEffect(() => {
        localStorage.setItem('startCount', JSON.stringify(startCount));
        localStorage.setItem('maxCount', JSON.stringify(maxCount));
    }, [startCount, maxCount]);


    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
