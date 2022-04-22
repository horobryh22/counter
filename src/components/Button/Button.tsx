import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classes from './Button.module.css'

type ButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    name: string
    callback: () => void
}

export const Button: React.FC<ButtonType> = ({name, callback, ...restProps}) => {

    const onClickHandler = () => {
        callback();
    }

    return <button onClick={onClickHandler} className={classes.button}  {...restProps}>{name}</button>
};

