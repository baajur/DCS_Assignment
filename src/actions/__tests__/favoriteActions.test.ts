import {
    addToFavorite,
    removeFromFavorite
} from '../favoriteActions';
import { ActionTypes } from 'actions';

describe('actions/favoriteActions', () => {
    describe('should return correct action for:', () => {
        it('addToFavorite', () => {
            expect(addToFavorite(2, 'a')).toEqual({
                type: ActionTypes.addToFavorite,
                payload: {
                    cityId: 2,
                    cityName: 'a'
                }
            })
        });

        it('removeFromFavorite', () => {
            expect(removeFromFavorite(2, 'a')).toEqual({
                type: ActionTypes.removeFromFavorite,
                payload: {
                    cityId: 2,
                    cityName: 'a'
                }
            });
        });
    });
});