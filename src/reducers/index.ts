import { combineReducers } from 'redux';
import {
    weatherReducer,
    INITIAL_STATE as weatherState,
    WeatherReducer
} from './weatherReducer';
import {
    favoritesReducer,
    INITIAL_STATE as favoritesState,
    FavoritesReducer,
} from './favoritesReducer';
import {
    searchReducer,
    INITIAL_STATE as searchState,
    SearchReducer,
} from './searchReducer';
import {
    noteReducer,
    INITIAL_STATE as noteState,
    NoteReducer,
} from './noteReducers';
import {
    geolocationReducer,
    INITIAL_STATE as geolocationState,
    GeolocationReducer,
} from './geolocationReducer';
import {
    messageReducer,
    INITIAL_STATE as messageState,
    MessageReducer,
} from './messageReducer';


export interface StoreState {
    weather: WeatherReducer,
    favorites: FavoritesReducer,
    search: SearchReducer,
    note: NoteReducer,
    geolocation: GeolocationReducer,
    message: MessageReducer,
}

export const INITIAL_STATE: StoreState = {
    weather: weatherState,
    favorites: favoritesState,
    search: searchState,
    note: noteState,
    geolocation: geolocationState,
    message: messageState,
}

export const reducers = combineReducers({
    weather: weatherReducer,
    favorites: favoritesReducer,
    search: searchReducer,
    note: noteReducer,
    geolocation: geolocationReducer,
    message: messageReducer
});