import { WIN_PATTERNS } from './const';

export const checkWinner = (field, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) => {
		return pattern.every((patIndex) => field[patIndex] === currentPlayer);
	});
};

export const checkDraw = (field) => {
	return !field.includes('');
};
