import React, {useState} from 'react';
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

    const [maxValue, setMaxValue] = useState<number>(1);
    const [startValue, setStartValue] = useState<number>(0);
    const condition = maxValue < startValue || maxValue < 0 || startValue < 0 || startValue === maxValue;

    condition ? setError('Incorrect value') : setError(null);

    const onClickHandler = () => {
        if (!condition) {
            setTextMessage(null);
            changeMaxValue(maxValue);
            changeStartValue(startValue);
            setError(null);
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
