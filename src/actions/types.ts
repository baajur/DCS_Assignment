import {
    FetchWeatherList,
    FetchWeatherListSuccess,
    FetchWeatherListFailed,
    RemoveWeatherFromList,
    FetchWeatherDetail,
    FetchWeatherDetailSuccess,
    FetchWeatherDetailFailed,
} from './weatherActions';
import {
    AddToFavorite,
    RemoveFromFavorite
} from './favoriteActions';
import {
    SearchByCity,
    SearchByCitySuccess,
    SearchByCityFailed,
    SearchByCityUnchanged,
    AddSearchToWeatherList,
    ResetSearch,
} from './searchActions';
import {
    AddNewNote,
    UpdateNote,
    DeleteNote,
} from './noteActions';
import {
    InitGeolocation,
    UpdateGeolocation,
    UpdateGeolocationFailed,
    FetchLocationWeather,
    FetchLocationWeatherSuccess,
    FetchLocationWeatherFailed,
} from './geolocationActions';
import {
    AddNewMessage
} from './messageActions';

export enum ActionTypes {
    testOnly = 'testOnly',

    fetchWeatherList = 'fetchWeatherList',
    fetchWeatherListSuccess = 'fetchWeatherListSuccess',
    fetchWeatherListFailed = 'fetchWeatherListFailed',

    fetchWeatherDetail = 'fetchWeatherDetail',
    fetchWeatherDetailSuccess = 'fetchWeatherDetailSuccess',
    fetchWeatherDetailFailed = 'fetchWeatherDetailError',

    fetchLocationWeather = 'fetchLocationWeather',
    fetchLocationWeatherSuccess = 'fetchLocationWeatherSuccess',
    fetchLocationWeatherFailed = 'fetchLocationWeatherFailed',

    removeWeatherFromList = 'removeWeatherFromList',

    addToFavorite = 'addToFavorite',
    removeFromFavorite = 'removeFromFavorite',

    resetSearch = 'resetSearch',
    searchByCity = 'searchByCity',
    searchByCitySuccess = 'searchByCitySuccess',
    searchByCityUnchanged = 'searchByCityUnchanged',
    searchByCityFailed = 'searchWByCityFailed',

    addSearchToWeatherList = 'addSearchToWeatherList',

    addNewNote = 'addNewNote',
    updateNote = 'updateNote',
    deleteNote = 'deleteNote',

    initGeolocation = 'initGeolocation',
    updateGeolocation = 'updateGeolocation',
    updateGeolocationFailed = 'updateGeolocationFailed',

    addNewMessage = 'addNewMessage',
}

export interface TestAction {
    type: ActionTypes.testOnly
}

export type Action = TestAction |
    FetchWeatherList |
    FetchWeatherListSuccess |
    FetchWeatherListFailed |

    FetchWeatherDetail |
    FetchWeatherDetailSuccess |
    FetchWeatherDetailFailed |

    FetchLocationWeather |
    FetchLocationWeatherSuccess |
    FetchLocationWeatherFailed |
    
    RemoveWeatherFromList |
    
    AddToFavorite |
    RemoveFromFavorite |
    
    SearchByCity |
    SearchByCitySuccess |
    SearchByCityUnchanged |
    SearchByCityFailed |
    ResetSearch |
    
    AddSearchToWeatherList |
    
    AddNewNote |
    UpdateNote |
    DeleteNote |
    
    InitGeolocation |
    UpdateGeolocation |
    UpdateGeolocationFailed |
    
    AddNewMessage;
