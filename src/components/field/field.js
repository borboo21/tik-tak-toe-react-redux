import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPES } from '../../store/action-types';
import { checkDraw, checkWinner } from '../../utils/check';
import styles from './field.module.css';

export const Field = () => {
	const dispatch = useDispatch();
	const field = useSelector((state) => state.field);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const setFieldValue = (i) => {
		if (field[i]) return;
		if (isGameEnded || isDraw) return;
		let newValue = field.slice();
		newValue[i] = currentPlayer;
		const result = checkWinner(newValue, currentPlayer);
		if (result) {
			dispatch({ type: ACTION_TYPES.SET_END });
		} else if (checkDraw(newValue)) {
			dispatch({ type: ACTION_TYPES.SET_DRAW });
		} else {
			dispatch({ type: ACTION_TYPES.TOGGLE_PLAYER });
		}
		dispatch({ type: ACTION_TYPES.SET_FIELD, payload: newValue });
	};

	return (
		<div className={styles.field}>
			{field.map((btn, index) => {
				return (
					<span key={index}>
						<button
							key={index}
							className={styles.btn}
							style={{ color: btn ? 'black' : 'lightcyan' }}
							disabled={isDraw || isGameEnded}
							onClick={() => {
								setFieldValue(index);
							}}
						>
							{btn || '-'}
						</button>
					</span>
				);
			})}
		</div>
	);
};
