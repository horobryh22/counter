import React, {useCallback, useEffect, useState} from 'react';
import {SettingsBoard} from './SettingsBoard/SettingsBoard';
import {Button} from '../Button/Button';
import classes from './Settings.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {
    MainCountsType,
    setMaxValueAC,
    setStartValueAC,
    setTextMessageAC,
    ValuesType
} from '../../redux/counter-reducer';
import {StateType} from '../../redux/store';

export type SettingsType = {
    error: string | null
    setError: (error: string | null) => void
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
}

export const Settings: React.FC<SettingsType> = React.memo(({changeStartValue, changeMaxValue, setError, error}) => {

    const dispatch = useDispatch();
    const values = useSelector<StateType, ValuesType>(state => state.counter.values);

    const condition = values.maxValue < values.startValue
        || values.maxValue < 0
        || values.startValue < 0
        || values.startValue === values.maxValue;

    // const [maxValue, setMaxValue] = useState<number>(2);
    // const [startValue, setStartValue] = useState<number>(1);

    useEffect(() => {
        const maxCount = localStorage.getItem('maxCount');
        const startCount = localStorage.getItem('startCount');

        if (maxCount) {
            const value = JSON.parse(maxCount);
            dispatch(setMaxValueAC(value))
            changeMaxValue(value);
        }

        if (startCount) {
            const value = JSON.parse(startCount);
            dispatch(setStartValueAC(value))
            changeStartValue(value);
        }

    }, []);


    useEffect(() => {
        condition ? setError('Incorrect value') : setError(null);     // оборачиваем в UseEffect так как при отрисовки компоненты Settings код
        // доходит до этой стройки, и происход снова перерисовка компоненты App,
        // так как мы через setError изменяем значение в state. Чтобы этого не
        // происходило, мы используем UseEffect и говорим,
        //что только при изменении нашего Condition будем запускаться
        // перерисовка.
    }, [condition]);


    const onClickHandler = () => {
        if (!condition) {
            changeMaxValue(values.maxValue);
            changeStartValue(values.startValue);
            setError(null);
            dispatch(setTextMessageAC(''))
        }
    }

    return (
        <div className={classes.wrapperSettings}>
            <SettingsBoard
                error={error}
            />
            <Button
                callback={onClickHandler}
                name={'set'}
                disabled={condition}
            />
        </div>
    );
});
