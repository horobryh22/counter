import React, {useEffect} from 'react';
import {SettingsBoard} from './SettingsBoard/SettingsBoard';
import {Button} from '../Button/Button';
import classes from './Settings.module.css'
import {useTypedDispatch, useTypedSelector} from '../../toolkit-redux/toolkit-store';
import {setCount, setError, setTextMessage} from '../../toolkit-redux/toolkit-counter-slice';
import {setValuesToLocalStoreTC} from '../../toolkit-redux/toolkit-thunk-creators';

export const Settings: React.FC = React.memo(() => {

    const dispatch = useTypedDispatch();
    const {startCount, maxCount} = useTypedSelector(state => state.counter.mainCounts);

    const condition = maxCount < startCount
        || maxCount < 0
        || startCount < 0
        || startCount === maxCount;


    useEffect(() => {
        condition ? dispatch(setError('Incorrect value')) : dispatch(setError(''));     // оборачиваем в UseEffect так как при отрисовки компоненты Settings код
        // доходит до этой стройки, и происход снова перерисовка компоненты App,
        // так как мы через setError изменяем значение в state. Чтобы этого не
        // происходило, мы используем UseEffect и говорим,
        //что только при изменении нашего Condition будем запускаться
        // перерисовка.
    }, [condition, dispatch]);


    const onClickHandler = () => {
        if (!condition) {
            dispatch(setValuesToLocalStoreTC());
            dispatch(setCount(startCount));
            dispatch(setError(''))
            dispatch(setTextMessage(''))
        }
    }

    return (
        <div className={classes.wrapperSettings}>
            <SettingsBoard/>
            <Button
                callback={onClickHandler}
                name={'set'}
                disabled={condition}
            />
        </div>
    );
});
