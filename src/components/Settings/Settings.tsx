import React from 'react';
import {SettingsBoard} from './SettingsBoard/SettingsBoard';
import {Button} from '../Button/Button';
import classes from './../Counter/Counter.module.css'

export type SettingsType = {
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    maxValue: number
    startValue: number
}

export const Settings: React.FC<SettingsType> = ({setMaxValue, setStartValue, startValue, maxValue}) => {
    return (
        <div className={classes.wrapperSettings}>
            <SettingsBoard setMaxValue={setMaxValue} setStartValue={setStartValue}/>
            <Button callback={() => {}} name={'set'}/>
        </div>
    );
};
