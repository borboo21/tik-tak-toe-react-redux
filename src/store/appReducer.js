import { ACTION_TYPES } from './action-types';

const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

export function appReducer(state = initialState, action) {
	switch (action.type) {
		case ACTION_TYPES.RESET:
			return initialState;
		case ACTION_TYPES.SET_END:
			return { ...state, isGameEnded: true };
		case ACTION_TYPES.SET_DRAW:
			return { ...state, isDraw: true };
		case ACTION_TYPES.TOGGLE_PLAYER:
			return { ...state, currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X' };
		case ACTION_TYPES.SET_FIELD:
			return { ...state, field: action.payload };
		default:
			return state;
	}
}
