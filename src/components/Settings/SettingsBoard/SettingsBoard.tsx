import React from 'react';
import classes from './SettingsBoard.module.css'
import {Input} from './Input/Input';

export type SettingsBoardType = {
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    error: string | null
    maxValue: number
    startValue: number
}

export const SettingsBoard: React.FC<SettingsBoardType> = ({setMaxValue, setStartValue, maxValue, startValue, error}) => {
    return (
        <div className={classes.settingsBoard}>
            <Input name={'Max Value:'} callback={setMaxValue} value={maxValue} error={error}/>
            <Input name={'Start Value:'} callback={setStartValue} value={startValue} error={error}/>
        </div>
    );
};
