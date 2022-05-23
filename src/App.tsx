import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useTypedDispatch} from './redux/store';
import {getValuesToLocalStoreTC} from './redux/counter-reducer';

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
