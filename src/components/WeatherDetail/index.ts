import { loadable } from 'utils';

export const WeatherDetail = loadable(
    () => import('./WeatherDetail')
);