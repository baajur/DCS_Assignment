import produce from 'immer';
import { ActionTypes, Action } from 'actions';
import { TypeOpenWeatherData } from 'apis';

export interface WeatherReducer {
    data: { [cityId: string]: TypeOpenWeatherData };
    loading: boolean;
    error: boolean;
    detailLoading: boolean;
    detailError: boolean; 
}

export const INITIAL_STATE: WeatherReducer = {
    data: {},
    loading: false,
    error: false,
    detailLoading: false,
    detailError: false,
}

export const weatherReducer = (state = INITIAL_STATE, action: Action) => {
    return produce(state, draft => {
        switch(action.type) {
            case ActionTypes.fetchWeatherList:
                draft.loading = true;
                draft.error = false;
                break;
            case ActionTypes.fetchWeatherListSuccess:
                draft.loading = false;
                draft.error = false;
                action.payload.forEach(cityData => {
                    draft.data[cityData.id] = cityData;
                });
                break;
            case ActionTypes.fetchWeatherListFailed:
                draft.loading = false;
                draft.error = true;
                break;

            case ActionTypes.removeWeatherFromList:
                delete draft.data[action.payload.cityId];
                break;

            case ActionTypes.fetchWeatherDetail:
                draft.detailLoading = true;
                draft.detailError = false;
                break;
            case ActionTypes.fetchWeatherDetailSuccess:
                draft.detailLoading = false;
                draft.detailError = false;
                if (action.payload) {
                    draft.data[action.payload.id] = action.payload;
                }
                break;
            case ActionTypes.fetchWeatherDetailFailed:
                draft.detailError = true;
                draft.detailLoading = false;
                break;

            default:
        }
    });
}

