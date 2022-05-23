import React from 'react';
import classes from './Scoreboard.module.css';
import {useTypedSelector} from '../../toolkit-redux/toolkit-store';

export const Scoreboard: React.FC = React.memo(() => {

    const {errorMessage: error, initialMessage: textMessage} = useTypedSelector(state => state.counter.messages);
    const {currentCount, maxCount} = useTypedSelector(state => state.counter.mainCounts);

    const countClassName = currentCount >= maxCount || error ? classes.countingStop : classes.counting;
    const scoreboardClassName = currentCount >= maxCount || error ? classes.scoreboardReject : classes.scoreboard;
    const condition = textMessage ? textMessage : currentCount;

    return (
        <div className={scoreboardClassName}>
            {error ? <div className={countClassName}>{error}</div> : <div className={countClassName}>{condition}</div>}
        </div>
    );
});
