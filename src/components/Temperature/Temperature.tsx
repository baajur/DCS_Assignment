import React, { memo, useContext } from 'react';
import './Temperature.scss';
import { TemperatureUnitContext } from 'context';

interface TemperatureProps {
    kelvinTemp: number;
    toFixed?: number;
}

const Temperature = ({ kelvinTemp, toFixed }: TemperatureProps) => {
    const { isCelcius } = useContext(TemperatureUnitContext);

    let display: string;

    if (isCelcius) {
        display = (kelvinTemp - 273.15)
            .toFixed(toFixed || 0);
    } else {
        display = (kelvinTemp * 9 / 5 - 459.67)
            .toFixed(toFixed || 0);
    }

    const CSymbol = () => <>&#8451;</>;
    const FSymbol = () => <>&#8457;</>;

    let className = 'Temperature';
    if (!isCelcius) className += ' f';

    return (
        <span className={className}>
            {display}{isCelcius ? <CSymbol/> : <FSymbol/>}
        </span>
    );
}

export default memo(Temperature);