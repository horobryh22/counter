import React, {useCallback, useEffect, useState} from 'react';
import {SettingsBoard} from './SettingsBoard/SettingsBoard';
import {Button} from '../Button/Button';
import classes from './Settings.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {
    MainCountsType, setCountAC, setErrorAC, setMaxCountAC,
    setMaxValueAC, setStartCountAC,
    setStartValueAC,
    setTextMessageAC,
    ValuesType
} from '../../redux/counter-reducer';
import {StateType} from '../../redux/store';

export type SettingsType = {}

export const Settings: React.FC<SettingsType> = React.memo(() => {

    const dispatch = useDispatch();
    const values = useSelector<StateType, ValuesType>(state => state.counter.values);

    const condition = values.maxValue < values.startValue
        || values.maxValue < 0
        || values.startValue < 0
        || values.startValue === values.maxValue;

    useEffect(() => {
        const maxCount = localStorage.getItem('maxCount');
        const startCount = localStorage.getItem('startCount');

        if (maxCount) {
            const value = JSON.parse(maxCount);
            dispatch(setMaxValueAC(value))
            dispatch(setMaxCountAC(value));
        }

        if (startCount) {
            const value = JSON.parse(startCount);
            dispatch(setStartValueAC(value))
            dispatch(setStartCountAC(value));
            dispatch(setCountAC(value));
        }

    }, []);


    useEffect(() => {
        condition ? dispatch(setErrorAC('Incorrect value')) : dispatch(setErrorAC(''));     // оборачиваем в UseEffect так как при отрисовки компоненты Settings код
        // доходит до этой стройки, и происход снова перерисовка компоненты App,
        // так как мы через setError изменяем значение в state. Чтобы этого не
        // происходило, мы используем UseEffect и говорим,
        //что только при изменении нашего Condition будем запускаться
        // перерисовка.
    }, [condition]);


    const onClickHandler = () => {
        if (!condition) {
            dispatch(setMaxCountAC(values.maxValue));
            dispatch(setStartCountAC(values.startValue));
            dispatch(setCountAC(values.startValue));
            dispatch(setErrorAC(''))
            dispatch(setTextMessageAC(''))
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
