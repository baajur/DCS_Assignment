import React, { memo, useCallback, useState } from 'react';
import './WeatherPanel.scss';
import { getOpenWeatherIconURL } from 'helpers';
import { Temperature } from 'components/Temperature';
import { WeatherInformation } from 'components/WeatherInformation';
import { TypeOpenWeatherData } from 'apis';

interface WeatherPanelProps {
    data: TypeOpenWeatherData,
    isFavorite?: boolean,
    onPanelClick?: (id: number) => any;
    toggleFavorite?: (id: number, turnOn: boolean, name?: string) => any;
    onDeleteClick?: (id: number, name?: string) => any;
}

const WeatherPanel = ({
    data,
    isFavorite,
    onPanelClick,
    toggleFavorite,
    onDeleteClick,
}: WeatherPanelProps) => {

    const { main, name, sys, id, wind } = data;
    const { icon, main: description } = data.weather[0];
    const { temp, humidity } = main;
    const { country } = sys;

    const onClick = useCallback(() => {
        if (onPanelClick) onPanelClick(id)
    }, [onPanelClick, id]);

    const [hover, setHover] = useState(false);

    const onMouseOver = useCallback(() => {
        if (onPanelClick) setHover(true);
    }, [onPanelClick]);
    
    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, []);

    let className = 'WeatherPanel'
    if (hover) className += ' on-hover';

    const onFavoriteButtonClick = useCallback(() => {
        if (toggleFavorite) toggleFavorite(id, !isFavorite, name);
    }, [toggleFavorite, isFavorite, id, name]);

    const onCloseButtonClick = useCallback(() => {
        if (onDeleteClick) onDeleteClick(id, name);
    }, [onDeleteClick, id, name]);

    return (
        <div className={className} tabIndex={0}>
            <div className='inner'>
                <div className='actions'>
                    {toggleFavorite && (
                        <button
                            className={`favorite ${isFavorite ? 'active' : ''}`}
                            onClick={onFavoriteButtonClick}
                            tabIndex={-1}
                            title={
                                isFavorite ?
                                    'Remove from your favorites' :
                                    'Add to your favorites'
                            }
                        >
                            <i
                                className={isFavorite ?
                                    'fas fa-star' : 
                                    'far fa-star'
                                }
                            />
                        </button>
                    )}
                    {onDeleteClick && (
                        <button
                            className='close'
                            onClick={onCloseButtonClick}
                            title='Remove city from list'
                            tabIndex={-1}
                        >
                            <i className='fas fa-times'/>
                        </button>
                    )}
                </div>

                <button
                    onClick={onClick}
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    tabIndex={-1}
                >
                    <div className='left'>
                        <p className='city'>{name}, {country}</p>
                        <div className='temp'>
                            <Temperature
                                kelvinTemp={temp}
                            />
                        </div>
                        <p className='description'>{description}</p>
                    </div>
                    <div className='right'>
                        <img
                            src={getOpenWeatherIconURL(icon)}
                            alt={icon}
                        />
                        <div className='additional'>
                            <WeatherInformation
                                type='wind'
                                value={wind.speed}
                            />
                            <WeatherInformation
                                type='humidity'
                                value={humidity}
                            />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default memo(WeatherPanel);

