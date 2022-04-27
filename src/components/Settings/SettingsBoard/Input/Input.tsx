import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from './Input.module.css';

export type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string
    error: string | null
    callback: (value: number) => void
    setTextMessage: (message: string | null) => void
}

export const Input: React.FC<InputType> = ({name, callback, error, setTextMessage, ...rest}) => {

    const inputClassName = error ? classes.input + ' ' + classes.error : classes.input;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        callback((value));
        setTextMessage('Set values and enter "set"');
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
};
