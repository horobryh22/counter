import React, {useEffect} from 'react';
import {SettingsBoard} from './SettingsBoard/SettingsBoard';
import {Button} from '../Button/Button';
import classes from './Settings.module.css'
import {useSelector} from 'react-redux';
import {setCountAC, setErrorAC, setTextMessageAC, setValuesToLocalStoreTC} from '../../redux/counter-reducer';
import {StateType, useTypedDispatch} from '../../redux/store';

export type SettingsType = {}

export const Settings: React.FC<SettingsType> = React.memo(() => {

    const dispatch = useTypedDispatch();
    const maxCount = useSelector<StateType, number>(state => state.counter.mainCounts.maxCount);
    const startCount = useSelector<StateType, number>(state => state.counter.mainCounts.startCount);

    const condition = maxCount < startCount
        || maxCount < 0
        || startCount < 0
        || startCount === maxCount;


    useEffect(() => {
        condition ? dispatch(setErrorAC('Incorrect value')) : dispatch(setErrorAC(''));     // оборачиваем в UseEffect так как при отрисовки компоненты Settings код
        // доходит до этой стройки, и происход снова перерисовка компоненты App,
        // так как мы через setError изменяем значение в state. Чтобы этого не
        // происходило, мы используем UseEffect и говорим,
        //что только при изменении нашего Condition будем запускаться
        // перерисовка.
    }, [condition, dispatch]);


    const onClickHandler = () => {
        if (!condition) {
            dispatch(setValuesToLocalStoreTC())
            dispatch(setCountAC(startCount));
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
