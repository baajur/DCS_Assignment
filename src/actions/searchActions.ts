import { ActionTypes } from './types';
import { TypeOpenWeatherData } from 'apis';

// searchByCity

export interface SearchByCity {
    type: ActionTypes.searchByCity,
    payload: string,
}

export const searchByCity = (searchTerm: string): SearchByCity => ({
    type: ActionTypes.searchByCity,
    payload: searchTerm
});

// searchByCityUnchanged

export interface SearchByCityUnchanged {
    type: ActionTypes.searchByCityUnchanged,
    payload: string;
}

export const searchByCityUnchanged = (
    searchTerm: string
): SearchByCityUnchanged => ({
    type: ActionTypes.searchByCityUnchanged,
    payload: searchTerm
});

// searchByCitySuccess

export interface SearchByCitySuccess {
    type: ActionTypes.searchByCitySuccess,
    payload: {
        searchTerm: string,
        data: TypeOpenWeatherData | null,
    }
}

export const searchByCitySuccess = (
    searchTerm: string,
    data: TypeOpenWeatherData | null
): SearchByCitySuccess => ({
    type: ActionTypes.searchByCitySuccess,
    payload: {
        searchTerm,
        data
    }
});

// searchByCityFailed

export interface SearchByCityFailed {
    type: ActionTypes.searchByCityFailed,
    payload: string
};

export const searchByCityFailed = (
    searchTerm: string
): SearchByCityFailed => ({
    type: ActionTypes.searchByCityFailed,
    payload: searchTerm
});

// addSearchToWeatherList

export interface AddSearchToWeatherList {
    type: ActionTypes.addSearchToWeatherList,
    payload: string
};

export const addSearchToWeatherList = (
    searchTerm: string
): AddSearchToWeatherList => ({
    type: ActionTypes.addSearchToWeatherList,
    payload: searchTerm,
});


// resetSearch

export interface ResetSearch {
    type: ActionTypes.resetSearch
};

export const resetSearch = () => ({
    type: ActionTypes.resetSearch
});