import { configureStore } from '@reduxjs/toolkit';
import { betslipReducer } from './slices/betslip.slice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';

const persistConfig = {
	key: 'betslip',
	storage
};

const reducers = combineReducers({ betslip: betslipReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
});

export default store;
