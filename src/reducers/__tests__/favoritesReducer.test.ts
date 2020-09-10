import { ActionTypes } from 'actions';
import { favoritesReducer, INITIAL_STATE } from '../favoritesReducer';

describe('reducers/favoritesReducer:', () => {
    it('should return INITIAL by default', () => {
        expect(favoritesReducer(
            undefined,
            {
                type: ActionTypes.testOnly
            }
        )).toEqual(INITIAL_STATE);
    });

    describe('should return correct state for:', () => {
        it('addToFavorite', () => {
            expect(favoritesReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.addToFavorite,
                    payload: { cityId: 1111 }
                }
            )).toEqual({
                ...INITIAL_STATE,
                '1111': true
            })
        });

        it('removeFromFavorite', () => {
            const state = {'111': true};

            expect(favoritesReducer(
                state,
                {
                    type: ActionTypes.removeFromFavorite,
                    payload: { cityId: 111 }
                }
            )).toEqual({});
        });

        it('removeWeatherFromList', () => {
            const state = {'111': true};

            expect(favoritesReducer(
                state,
                {
                    type: ActionTypes.removeWeatherFromList,
                    payload: { cityId: 111 }
                }
            )).toEqual({});
        });
    })
});