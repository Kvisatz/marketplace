import { useEffect } from 'react';
import Styles from './Preloader.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeTrue, changeFalse } from '../../../features/preloader/preloaderSlice'

const Preloader = ({stateApp, setStateApp}) => {
	const preloaderState = useSelector(state => state.preloader.value)
  	const dispatch = useDispatch()

	console.log(pageListener)
	function pageListener() {
		// let copy = Object.assign([], stateApp);
		// copy.preloader.isLoadPage = true;
		// setStateApp(copy);
		dispatch(changeTrue())
	}
	window.addEventListener('load', pageListener);

	useEffect(() => {
		// window.removeEventListener('load', dispatch(change()));
		dispatch(changeFalse());
	});

	let isHidden = preloaderState? ` ${Styles.hidden}` : '';
	// let isHidden = stateApp.preloader.isLoadPage && !stateApp.preloader.isFetch? ` ${Styles.hidden}` : '';

	return (
		<div className={Styles.loader + isHidden}>
			<div className={Styles.loader__wrapper}></div>
		</div>
	);
};

export default Preloader;