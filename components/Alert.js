import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react';

import { clearAlertMessage } from '../slices/alert';

const Alert = () => {
	const { message, autoHide } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
	const alertRef = useRef();

	const hideAlert = () => {
		alertRef.current.classList.remove('top-8');
		alertRef.current.classList.add('-top-32');
		dispatch(clearAlertMessage());
	};

	const showAlert = () => {
		alertRef.current.classList.remove('-top-32');
		alertRef.current.classList.add('top-8');
	};

	useEffect(() => {
		if (message) {
			showAlert();

			if (autoHide) {
				const toggleAlert = setInterval(() => {
					hideAlert();
					clearInterval(toggleAlert);
				}, 3000);
			}
		}
	}, [message]);

  return (
	  <div ref={alertRef} className="fixed z-50 -top-32 rounded-xl left-2/4 transform -translate-x-2/4 bg-green-100 text-green-500 p-4 w-4/5 md:w-3/5 flex justify-between items-center">
			<span id="message">{ message }</span>

			<button type="button" onClick={hideAlert}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	);
};

export default Alert;