import { loadable } from 'utils';

export const SearchWeatherResults = loadable(
    () => import('./SearchWeatherResults')
);