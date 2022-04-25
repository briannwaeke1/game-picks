import { createSlice } from '@reduxjs/toolkit';

const betslipSlice = createSlice({
	name: 'betslip',
	initialState: [],
	reducers: {
		addToBetslip: (state, action) => {
			state.push(action.payload);
		},

		removeAll(state) {
			return [];
		},
		removeItem: (state, action) => {
			return state.filter(item => item.id !== action.payload);
		}
	}
});

export const betslipReducer = betslipSlice.reducer;

export const { addToBetslip, removeAll, removeItem } = betslipSlice.actions;
