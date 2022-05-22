import React from 'react';
import classes from './SettingsBoard.module.css'
import {Input} from './Input/Input';

export type SettingsBoardType = {
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    setTextMessage: (message: string | null) => void
    error: string | null
    maxValue: number
    startValue: number
}

export const SettingsBoard: React.FC<SettingsBoardType> = React.memo(({setTextMessage,setMaxValue, setStartValue, maxValue, startValue, error}) => {
    return (
        <div className={classes.settingsBoard}>
            <Input
                name={'Max Value:'}
                callback={setMaxValue}
                value={maxValue.toString()}
                error={error}
                setTextMessage={setTextMessage}
            />
            <Input
                setTextMessage={setTextMessage}
                name={'Start Value:'}
                callback={setStartValue}
                value={startValue.toString()}
                error={error}
            />
        </div>
    );
});
