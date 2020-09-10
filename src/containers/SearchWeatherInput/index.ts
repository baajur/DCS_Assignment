import { loadable } from 'utils';

export const SearchWeatherInput = loadable(
    () => import('./SearchWeatherInput')
);