import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import betslipReducer from './betSlipSlice';

const makeStore = () =>
	configureStore({
		reducer: { betslip: betslipReducer },
		devTools: true
	});

export const wrapper = createWrapper(makeStore, { debug: true });
