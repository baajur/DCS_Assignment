import produce from 'immer';
import { ActionTypes, Action } from 'actions';
import { TypeOpenWeatherData } from 'apis';

export interface GeolocationReducer {
    granted: boolean | null;
    latitude: number | null;
    longitude: number | null;
    weatherData: TypeOpenWeatherData | null;
    loading: boolean;
    error: boolean;
};

export const INITIAL_STATE: GeolocationReducer = {
    granted: null,
    latitude: null,
    longitude: null,
    weatherData: null,
    loading: false,
    error: false,
};

export const geolocationReducer = (state = INITIAL_STATE, action: Action) => {
    return produce(state, draft => {
        switch(action.type) {
            case ActionTypes.updateGeolocation:
                draft.granted = true;
                draft.latitude = action.payload.coords.latitude;
                draft.longitude = action.payload.coords.longitude;
                break;
            case ActionTypes.updateGeolocationFailed:
                draft.granted = false;
                draft.latitude = null;
                break;

            case ActionTypes.fetchLocationWeather:
                draft.loading = true;
                draft.error = false;
                break;
            case ActionTypes.fetchLocationWeatherSuccess:
                draft.loading = false;
                draft.error = false;
                draft.weatherData = action.payload;
                break;
            case ActionTypes.fetchLocationWeatherFailed:
                draft.loading = false;
                draft.error = true;
                break;

            default:
        }
    });
}