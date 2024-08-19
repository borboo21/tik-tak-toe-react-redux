import { useSelector } from 'react-redux';
import styles from './information.module.css';

export const Information = () => {
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);

	return (
		<div>
			{isDraw ? (
				<p className={styles.player}>Ничья</p>
			) : isGameEnded ? (
				<p className={styles.player}>Победа:{currentPlayer} </p>
			) : (
				<p className={styles.player}>Ходит:{currentPlayer}</p>
			)}
		</div>
	);
};
