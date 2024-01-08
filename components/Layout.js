import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useToggleScrollToTopController from '../hooks/useToggleScrollToTopController';
import useResizeHeaderOnScroll from '../hooks/useResizeHeaderOnScroll';
import useHideCurrentPageLink from '../hooks/useHideCurrentPageLink';
import useScrollToElement from '../hooks/useScrollToElement';
import DynamicCssGenerator from './DynamicCssGenerator';
import useRippleEffect from '../hooks/useRippleEffect';
import useToggleNavbar from '../hooks/useToggleNavbar';
import { getProducts } from '../slices/product';
import ThemeSwitch from './ThemeSwitch';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Alert from './Alert';

const Layout = (props) => {
	const { products } = useSelector((state) => state.product);
	const [product_links, setProductLinks] = useState([]);
	const closeMenuRef = useRef(null);
	const openMenuRef = useRef(null);
	const overlayRef = useRef(null);
	const navbarRef = useRef(null);
	const dispatch = useDispatch();

	const GetProductSlugs = () => {
		const product_icons = { application: 'fa fa-terminal', website: 'fa fa-globe' };
		const ProductSlugs = products?.map(product => {
			const icon_key = Object.entries(product_icons).map(([k, v]) => {
				if (product.slug.toLowerCase().includes(k)) return k;
			}).join('');

			return {
				href: '/products/' + product.slug,
				icon: product_icons[icon_key],
				text: product.name,
			};
		})
		return ProductSlugs;
	};
	
	useEffect(() => { 
		AOS.init({ easing: 'ease-in-out-sine' });
		// setProductLinks(GetProductSlugs());
		// dispatch(getProducts());
	}, []);

	useScrollToElement({ selector: '.scroll-selector' });
	useResizeHeaderOnScroll();
	useHideCurrentPageLink();
	useRippleEffect();
	
	useToggleScrollToTopController({
		selector: '#back-to-top',
		display: 'flex'
	});
	
	useToggleNavbar({
		closer: closeMenuRef,
		opener: openMenuRef,
		overlay: overlayRef,
		navbar: navbarRef,
	});

	return (
		<div>
			<Header openMenuRef={openMenuRef} />
			<Navbar closeMenuRef={closeMenuRef} navbarRef={navbarRef} product_links={product_links} />
			<ThemeSwitch />
			
			{props.children}
			
			<Footer product_links={product_links} />
			
			<span id="back-to-top" className="scroll-selector cursor-pointer hidden fixed justify-center items-center right-8 md:right-12 bottom-8 rounded-full bg-algrith-green ripple-node text-white text-3xl w-16 h-16 md:w-18 md:h-18">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
					<path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
				</svg>
			</span>
			
			<div ref={overlayRef} className="fixed hidden top-0 left-0 z-20 bg-black opacity-50 h-screen w-screen"></div>

			<Alert />

			{/*
				Since TailwindCSS uses treeshaking, classes not visible in jsx elements won't
				be generated. DynamicCssGenerator component helps generate all css styles used
				as javascript variables which are not visible to TailwindCSS at build time.
				Do not forget to add your dynamic classes to this component.
      */}
			<DynamicCssGenerator />
		</div>
	);
};

export default Layout;