import React, {ChangeEvent} from 'react';
import classes from './Input.module.css';

export type InputType = {
    name: string
    callback: (value: number) => void
}

export const Input: React.FC<InputType> = ({name, callback}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value));
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>{name}</div>
            <input onChange={onChangeHandler} className={classes.input} type="number"/>
        </div>
    );
};
