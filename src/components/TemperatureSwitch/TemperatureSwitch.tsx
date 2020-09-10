import React, { memo, useContext } from 'react';
import './TemperatureSwitch.scss';
import { TemperatureUnitContext } from 'context';

const TemperatureSwitch = () => {
    const {
        isCelcius,
        toggleTempUnit
    } = useContext(TemperatureUnitContext);
    
    let className = 'TemperatureSwitch';
    if (!isCelcius) className += ' f';

    return (
        <div className={className}>
            <span className='c'>
                &#8451;
            </span>
            <button onClick={toggleTempUnit}>
                <span
                    className='slider'
                />
                <span
                    className='slider-button'
                />
            </button>

            <span className='f'>
                &#8457;
            </span>
        </div>
    );
}

export default memo(TemperatureSwitch);