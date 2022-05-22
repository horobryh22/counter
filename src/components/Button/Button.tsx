import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classes from './Button.module.css'

type ButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    name: string
    callback: () => void
}

export const Button: React.FC<ButtonType> = React.memo(({name, callback, ...restProps}) => {

    return <button onClick={callback} className={classes.button}  {...restProps}>{name}</button>
});


