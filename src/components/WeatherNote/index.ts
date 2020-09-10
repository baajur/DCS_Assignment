import { loadable } from 'utils';

export const WeatherNote = loadable(
    () => import('./WeatherNote')
);