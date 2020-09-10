import { createSelector } from 'reselect';
import { StoreState } from 'reducers';

const getGeolocationSelector = (state: StoreState) => state.geolocation;

export const getIsGeolocationAvailable = createSelector(
    [getGeolocationSelector],
    (geolocation) => {
        const { granted, latitude, longitude } = geolocation;

        return !!(granted &&
            latitude !== null &&
            longitude !== null);
    }
)