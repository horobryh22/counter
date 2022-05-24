import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useTypedDispatch} from './toolkit-redux/toolkit-store';
import {getValuesFromLocalStorage} from './toolkit-redux/toolkit-thunk-creators';


function App() {

    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getValuesFromLocalStorage());
    }, []);

    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
