import React from 'react';
import classes from './SettingsBoard.module.css'
import {Input} from './Input/Input';

export type SettingsBoardType = {
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
}

export const SettingsBoard: React.FC<SettingsBoardType> = ({setMaxValue, setStartValue}) => {
    return (
        <div className={classes.settingsBoard}>
            <Input name={'Max Value:'} callback={setMaxValue}/>
            <Input name={'Start Value:'} callback={setStartValue}/>
        </div>
    );
};
