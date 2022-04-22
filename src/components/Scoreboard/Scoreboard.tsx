import React from 'react';
import classes from '../Counter/Counter.module.css';

type ScoreboardType = {
    count: number
}

export const Scoreboard: React.FC<ScoreboardType> = ({count}) => {

    const countClassName = count > 4 ? classes.countingStop : classes.counting;
    const scoreboardClassName = count > 4 ? classes.scoreboardReject : classes.scoreboard;

    return (
        <div className={scoreboardClassName}>
            <div className={countClassName}>{count}</div>
        </div>
    );
};
