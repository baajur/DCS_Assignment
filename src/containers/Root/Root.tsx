import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { reducers } from 'reducers';
import { sagas } from 'sagas';
import { APP_NAME, VERSION } from 'configs';

const persistConfigs = {
    key: APP_NAME.replace(' ', '_').toLowerCase() + VERSION,
    storage,
}

export interface RootProps {
    initialState?: { [key: string]: any },
    children: ReactNode
}

export const Root = (function() {
    let store = createStore(reducers, {});

    class _Root extends React.Component<RootProps> {
        static getStore() {
            return store;
        }

        render() {
            const { initialState, children } = this.props;
            const sagaMiddleware = createSagaMiddleware();
            
            let enhancer;
            if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
                enhancer = composeWithDevTools as typeof compose;
            } else {
                enhancer = compose;
            }

            const persistedReducer = persistReducer(
                persistConfigs,
                reducers
            );

            store = createStore(
                persistedReducer,
                initialState,
                enhancer(
                    applyMiddleware(sagaMiddleware)
                )
            );

            const persistor = persistStore(store);
            persistor.flush();
            sagaMiddleware.run(sagas);
            
            return (
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        {children}
                    </PersistGate>
                </Provider>
            );
        }
    }

    return _Root;
})();