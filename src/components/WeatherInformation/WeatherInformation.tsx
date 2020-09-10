import React, { memo } from 'react';
import './WeatherInformation.scss';
import { WEATHER_UNITS } from 'configs';

export enum WeatherInfoTypes {
    pressure = 'pressure',
    humidity = 'humidity',
    wind = 'wind',
    cloud = 'cloud',
}

interface WeatherInformationProps {
    type: keyof typeof WeatherInfoTypes;
    value: string | number;
}

const WeatherInformation = ({ type, value }: WeatherInformationProps) => {
    let icon: string = '';
    let display =  value;

    if (type === WeatherInfoTypes.humidity) {
        icon = 'fas fa-tint';
        display += WEATHER_UNITS.humidity;
    } else if (type === WeatherInfoTypes.pressure) {
        icon = 'fas fa-weight';
        display += ` ${WEATHER_UNITS.pressure}`;
    } else if (type === WeatherInfoTypes.wind) {
        icon = 'fas fa-wind';
        display += ` ${WEATHER_UNITS.windSpeed}`;
    } else if (type === WeatherInfoTypes.cloud) {
        icon = 'fas fa-cloud';
        display += WEATHER_UNITS.cloud;
    }

    const className = `WeatherInformation ${type}`;

    return (
        <span className={className} title={type}>
            <i className={icon}/>{' '}
            {display}
        </span>
    );
}

export default memo(WeatherInformation);