import React, {DetailedHTMLProps, InputHTMLAttributes, useRef} from 'react';
import classes from './Input.module.css';
import {useDispatch} from 'react-redux';
import {setTextMessageAC} from '../../../../redux/counter-reducer';

export type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string
    error: string | null
    callback: (value: number) => void
}

export const Input: React.FC<InputType> = React.memo(({name, callback, error, ...rest}) => {

    const dispatch = useDispatch();

    const inputClassName = error ? classes.input + ' ' + classes.error : classes.input;
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = () => {
        const value = Number(inputRef.current?.value);
        callback((value));
        dispatch(setTextMessageAC('Set values and enter "set"'));
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>{name}</div>
            <input
                ref={inputRef}
                onChange={onChangeHandler}
                className={inputClassName}
                type="number"
                {...rest}
            />
        </div>
    );
});
