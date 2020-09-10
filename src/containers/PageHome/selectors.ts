import { createSelector } from 'reselect';
import { StoreState } from 'reducers';

export const getWeatherListSelector = (state: StoreState) => state.weather.data;

export const getFavoriteListSelector = (state: StoreState) => state.favorites;

export const getArrangedWeatherSelector = createSelector(
    [
        getWeatherListSelector,
        getFavoriteListSelector,
    ],
    (data, favorites) => {
        const cities = Object.values(data);
        cities.sort((a, b) => {
            const isFavoriteA = favorites[a.id];
            const isFavoriteB = favorites[b.id];
            if (isFavoriteA && !isFavoriteB) {
                return -1;
            } else if (!isFavoriteA && isFavoriteB) {
                return 1;
            }
            return a.name < b.name ? -1 : 1            
        });

        return cities;
    }
);

