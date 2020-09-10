import React, { memo } from 'react';
import './WeatherDetail.scss';
import { Temperature } from 'components/Temperature';
import { WeatherInformation } from 'components/WeatherInformation';
import { getOpenWeatherIconURL } from 'helpers';
import { TypeOpenWeatherData } from 'apis';

interface WeatherDetailProps {
    data: TypeOpenWeatherData
}

const WeatherDetail = ({ data }: WeatherDetailProps) => {
    const { weather, main, name, sys, wind, clouds } = data;
    const { main: description, icon } = weather[0];
    const {
        temp,
        temp_min,
        temp_max,
        pressure,
        humidity,
    } = main;
    const { country } = sys;
    const { speed } = wind;

    return (
        <div className='WeatherDetail'>
            <div className='main-display'>
                <img
                    src={getOpenWeatherIconURL(icon)}
                    alt={description}
                />
                <Temperature
                    kelvinTemp={temp}
                    toFixed={1}
                />
            </div>
            
            <h3 className='city'>
                {name}, {country}
            </h3>

            <dl className='information'>
                <dt>Condition:</dt>
                <dd className='condition'>{description}</dd>

                <dt>Lowest temp:</dt>
                <dd>
                    <Temperature kelvinTemp={temp_min} toFixed={1}/>
                </dd>

                <dt>Highest temp:</dt>
                <dd>
                    <Temperature kelvinTemp={temp_max} toFixed={1}/>
                </dd>

                <dt>Humidity:</dt>
                <dd>
                    <WeatherInformation
                        type='humidity'
                        value={humidity}
                    />
                </dd>

                <dt>Air pressure:</dt>
                <dd>
                    <WeatherInformation
                        type='pressure'
                        value={pressure}
                    />
                </dd>

                <dt>Wind speed:</dt>
                <dd>
                    <WeatherInformation
                        type='wind'
                        value={speed}
                    />
                </dd>

                <dt>Cloudiness:</dt>
                <dd>
                    <WeatherInformation
                        type='cloud'
                        value={clouds.all}
                    />
                </dd>
            </dl>
        </div>
    );
}

export default memo(WeatherDetail);