import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: []
};

export const betslipSlice = createSlice({
	name: 'betslip',
	initialState,
	reducers: {
		addItem: (state, action) => {
			return {
				...state,
				// Redux Toolkit allows us to write "mutating" logic in reducers. It
				// doesn't actually mutate the state because it uses the Immer library,
				// which detects changes to a "draft state" and produces a brand new
				// immutable state based off those changes

				items: [...state.items, action.payload]
			};
		},
		removeItem: (state, action) => {
			return {
				...state,
				// Redux Toolkit allows us to write "mutating" logic in reducers. It
				// doesn't actually mutate the state because it uses the Immer library,
				// which detects changes to a "draft state" and produces a brand new
				// immutable state based off those changes

				items: state.items.filter(item => item.id !== action.payload)
			};
		}
	}
});

// Action creators are generated for each case reducer function
export const { addPick, removePick } = betslipSlice.actions;

export default betslipSlice.reducer;
