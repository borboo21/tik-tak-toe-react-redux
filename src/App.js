import './index.css';
import styles from './App.module.css';
import { Information, Field } from './components';
import { store } from './store/store';
import { ACTION_TYPES } from './store/action-types';
import { useSelector } from 'react-redux';

export const App = () => {
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);
	const retry = () => {
		store.dispatch({ type: ACTION_TYPES.RESET });
	};

	return (
		<div className={styles.App}>
			<Information />
			<Field />
			{(isGameEnded || isDraw) && (
				<div className={styles.retryArea}>
					<button className={styles.retryBtn} onClick={() => retry()}>
						Попробовать снова
					</button>
				</div>
			)}
		</div>
	);
};
