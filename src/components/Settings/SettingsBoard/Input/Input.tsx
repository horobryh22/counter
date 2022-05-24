import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from './Input.module.css';
import {useTypedDispatch} from '../../../../toolkit-redux/toolkit-store';
import {setTextMessage} from '../../../../toolkit-redux/toolkit-counter-slice';


export type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string
    error: string | null
    callback: (value: number) => void
}

export const Input: React.FC<InputType> = React.memo(({name, callback, error, ...rest}) => {

    const dispatch = useTypedDispatch();

    const inputClassName = error ? classes.input + ' ' + classes.error : classes.input;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('hello')
        const value = Number(e.currentTarget.value);
        callback((value));
        dispatch(setTextMessage('Set values and enter "set"'));
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>{name}</div>
            <input
                onChange={onChangeHandler}
                className={inputClassName}
                type="number"
                {...rest}
            />
        </div>
    );
});
