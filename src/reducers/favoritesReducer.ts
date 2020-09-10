import produce from 'immer';
import { Action, ActionTypes } from 'actions';

export interface FavoritesReducer {
    [cityId: string]: boolean;
}

export const INITIAL_STATE: FavoritesReducer = {};

export const favoritesReducer = (state = INITIAL_STATE, action: Action) => {
    return produce(state, draft => {
        switch(action.type) {
            case ActionTypes.addToFavorite:
                draft[`${action.payload.cityId}`] = true;
                break;
            case ActionTypes.removeFromFavorite:
                delete draft[action.payload.cityId];
                break;

            case ActionTypes.removeWeatherFromList:
                delete draft[action.payload.cityId];
                break;
                
            default:
        }
    });
}