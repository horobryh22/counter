import React, {useEffect, useState} from 'react';
import {SettingsBoard} from './SettingsBoard/SettingsBoard';
import {Button} from '../Button/Button';
import classes from './Settings.module.css'

export type SettingsType = {
    error: string | null
    setError: (error: string | null) => void
    setTextMessage: (message: string | null) => void
    changeMaxValue: (value: number) => void
    changeStartValue : (value: number) => void
}

export const Settings: React.FC<SettingsType> = ({changeStartValue, changeMaxValue, setError, error, setTextMessage}) => {

    const [maxValue, setMaxValue] = useState<number>(2);
    const [startValue, setStartValue] = useState<number>(1);
    const condition = maxValue < startValue || maxValue < 0 || startValue < 0 || startValue === maxValue;

    useEffect(() => {
        const maxCount = localStorage.getItem('maxCount');
        const startCount = localStorage.getItem('startCount');

        if (maxCount) {
            const value = JSON.parse(maxCount);
            setMaxValue(value);
            changeMaxValue(value);
        }

        if (startCount) {
            const value = JSON.parse(startCount);
            setStartValue(value);
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
            changeMaxValue(maxValue);
            changeStartValue(startValue);
            setError(null);
            setTextMessage(null);
        }
    }

    return (
        <div className={classes.wrapperSettings}>
            <SettingsBoard
                error={error}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                startValue={startValue}
                setTextMessage={setTextMessage}
            />
            <Button
                callback={onClickHandler}
                name={'set'}
                disabled={condition}
            />
        </div>
    );
};
