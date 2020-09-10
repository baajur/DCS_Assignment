import { createSelector } from 'reselect';
import { StoreState } from 'reducers';

export const getSearchSelector = (state: StoreState) => state.search;
export const getFavoriteListSelector = (state: StoreState) => state.favorites;

export const getSearchResultSelector = createSelector(
    [getSearchSelector],
    (search) => {
        const { loading, results, currentSearchTerm } = search;

        if (loading) return null;

        const result = results[currentSearchTerm];
        
        return result ? result.data : null;
    }
)

export const getIsFavoriteSelector = createSelector(
    [getSearchSelector, getFavoriteListSelector],
    (search, favorites) => {
        const { results, currentSearchTerm } = search;
        const result = results[currentSearchTerm];
        const isFavorite = result && result.data && favorites[result.data.id];
        
        return !!isFavorite;
    }
)

