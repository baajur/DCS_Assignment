import { createSelector } from 'reselect';
import { PageDetailProps } from './PageDetail';
import { StoreState } from 'reducers';

const getWeathersSelector = (state: StoreState) => state.weather.data;

const getCityIdSelector = (state: StoreState, props: PageDetailProps) => {
    const { cityId } =  props.match.params as { cityId?: string };
    return Number(cityId);
}

export const getDetailDataSelector = createSelector(
    [
        getWeathersSelector,
        getCityIdSelector
    ],
    (data, cityId) => {
        if (!cityId || !data[cityId]) return null;
        return data[cityId];
    }
);

const getNoteDataSelector = (state: StoreState) => state.note.data;

export const getNotesSelector = createSelector(
    [
        getNoteDataSelector,
        getCityIdSelector,
    ],
    (data, cityId) => {
        if (!cityId || !data[cityId]) return [];

        const notes = Object.values(data[cityId]);

        notes.sort((a, b) => {
            return a.createdTime < b.createdTime ? -1 : 1;
        });

        return notes;
    }
);
