import { ActionTypes } from './types';

// addToFavorite

export interface AddToFavorite {
    type: ActionTypes.addToFavorite,
    payload: {
        cityId: number,
        cityName?: string,
    };
}

export const addToFavorite = (
    cityId: number,
    cityName?: string,
): AddToFavorite => ({
    type: ActionTypes.addToFavorite,
    payload: {
        cityId,
        cityName
    }
});


// removeFromFavorite

export interface RemoveFromFavorite {
    type: ActionTypes.removeFromFavorite;
    payload: {
        cityId: number;
        cityName?: string;
    };
}

export const removeFromFavorite = (
    cityId: number,
    cityName?: string,
): RemoveFromFavorite => ({
    type: ActionTypes.removeFromFavorite,
    payload: {
        cityId,
        cityName
    }
});