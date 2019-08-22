import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { saveState,loadState } from './localStorageFile';
import {AsyncStorage} from 'react-native';
import {persistStore,persistReducer} from 'redux-persist';

  

const persistConfig = {
    key:'root',
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
const middlware =[thunk];
middlware.push(createLogger());
export const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middlware)
    )
);
export const persistor = persistStore(store);
// store.subscribe(()=>{
//     saveState({
//         initAppReducer:store.getState().initAppReducer
//     });
// });
// export default store;