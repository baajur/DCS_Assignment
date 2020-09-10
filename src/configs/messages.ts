export const MESSAGE_DISPLAY_DURATION_IN_MS = 3000;
export enum MessageTypes {
    info = 'info',
    error = 'error',
    favorite = 'favorite',
    delete = 'delete',
    success = 'success',
};

export const MESSAGES = {
    addToFavorite: 'is added to your favourites',
    removeFromFavorite: 'is removed from your favorite',

    removeCity: 'is removed from your watch list',
    
    geolocationNotSupported: 'Geolocation is not supported by browser',
    
    addNote: 'Note is added',
    updateNote: 'Note is updated',
    deleteNote: 'Note is deleted',

    noWeatherDataAvailable: 'Cannot fetch weather data',
    notAllWeatherDataAvailable: `Cannot fetch data for`
};
