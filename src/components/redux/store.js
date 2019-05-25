import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import errorReducer from '../reducer/errorReducer';
import authReducer from './reducers/authReducer';
// import getregistrantReducer from '../reducer/getregistrantReducer';




// import appReducer from '../reducer';

const appReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
};


const pR = persistReducer(persistConfig, appReducer);

export const store = createStore(pR, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store, { timeout: 1000 });

