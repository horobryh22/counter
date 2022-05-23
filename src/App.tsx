import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {getValuesToLocalStoreTC} from './toolkit-redux/toolkit-thunk-creators';
import {useTypedDispatch} from './toolkit-redux/toolkit-store';


function App() {

    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getValuesToLocalStoreTC());
    }, []);

    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
