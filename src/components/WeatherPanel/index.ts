import { loadable } from 'utils';

export const WeatherPanel = loadable(
    () => import('./WeatherPanel')
);