import produce from 'immer';
import moment from 'moment';
import { ActionTypes, Action } from 'actions';
import { TypeSearchResults } from 'apis';

export interface SearchReducer {
    currentSearchTerm: string;
    loading: boolean;
    error: boolean;
    results: TypeSearchResults,
};

export const INITIAL_STATE: SearchReducer = {
    currentSearchTerm: '',
    loading: false,
    error: false,
    results: {}
};

export const searchReducer = (state = INITIAL_STATE, action: Action) => {
    return produce(state, draft => {
        switch(action.type) {
            case ActionTypes.resetSearch:
                draft.currentSearchTerm = INITIAL_STATE.currentSearchTerm;
                draft.loading = INITIAL_STATE.loading;
                draft.error = INITIAL_STATE.error;
                break;
            case ActionTypes.searchByCity:
                draft.currentSearchTerm = action.payload;
                draft.loading = true;
                draft.error = false;
                break;
            case ActionTypes.searchByCityUnchanged:
                if (action.payload === draft.currentSearchTerm) {
                    draft.loading = false;
                    draft.error = false;
                }
                break;
            case ActionTypes.searchByCitySuccess:
                if (action.payload.searchTerm === draft.currentSearchTerm) {
                    draft.loading = false;
                    draft.error = false;
                }

                draft.results[action.payload.searchTerm] = {
                    data: action.payload.data,
                    timeStamp: moment().valueOf()
                }
                break;
            case ActionTypes.searchByCityFailed:
                if (action.payload === draft.currentSearchTerm) {
                    draft.loading = false;
                    draft.error = true;
                }
                break;
            default:
        }
    });
}