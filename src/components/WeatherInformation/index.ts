import { loadable } from 'utils';

export const WeatherInformation = loadable(
    () => import('./WeatherInformation')
);