import React, { useEffect } from "react";

export default function useToggleScrollToTopController({ selector, display }) {
	useEffect(() => {
		const toggleScrollToTopController = () => {
			const target = document.querySelector(selector);
			if ((target && typeof target !== 'object') || (display && typeof display !== 'string')) {
				return console.error({
					status: 'error',
					message: 'Instance of scrollToTop error.',
					description: 'target parameters must be an HTML object. display must be a string and a valid CSS display value'
				})
			}
			if (!target && !display) {
				return console.error({
					status: 'error',
					message: 'Instance of scrollToTop error.',
					description: 'no valid parameters provided'
				})
			}
			// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
			if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
				target.style.display = display;
			} else {
				target.style.display = 'none';
			}
		}
		window.addEventListener('scroll', toggleScrollToTopController)
		toggleScrollToTopController()
		return () => window.removeEventListener('scroll', toggleScrollToTopController)
	}, [])
}