import { useEffect } from "react";

export default function useScrollToElement({ selector }) {
  useEffect(() => {
		const scroll_selectors = document.querySelectorAll(selector);
		scroll_selectors.forEach(selector => {
			selector.addEventListener('click', function (e) {
				e.preventDefault();
				let offset_top;
				if (this.id !== 'back-to-top') {
					const href = this.getAttribute("href");
					offset_top = document.querySelector(href).offsetTop;
				} else {
					offset_top = 0;
				}
				scroll({
					top: offset_top,
					behavior: "smooth"
				});
			});
		});
	}, [])
}