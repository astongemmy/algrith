import React, { useEffect, useRef } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import DynamicCssGenerator from './DynamicCssGenerator'
import useHideCurrentPageLink from '../hooks/useHideCurrentPageLink'
import useRippleEffect from '../hooks/useRippleEffect'
import useToggleScrollToTopController from '../hooks/useToggleScrollToTopController'
import useScrollToElement from '../hooks/useScrollToElement'
import useToggleNavbar from '../hooks/useToggleNavbar'
import useResizeHeaderOnScroll from '../hooks/useResizeHeaderOnScroll'

export default function Layout(props) {
	const openMenuRef = useRef(null)
	const closeMenuRef = useRef(null)
	const navbarRef = useRef(null)
	const overlayRef = useRef(null)
	useEffect(() =>	{	AOS.init({ easing: 'ease-in-out-sine' }) }, [])
	useHideCurrentPageLink()
	useRippleEffect()	
	useResizeHeaderOnScroll()
	useScrollToElement({
		selector: ".scroll-selector"
	});
	useToggleScrollToTopController({
		selector: "#back-to-top",
		display: "flex"
	});
	useToggleNavbar({
		opener: openMenuRef,
		closer: closeMenuRef,
		navbar: navbarRef,
		overlay: overlayRef
	})
	
	return (
		<div>
			<Header openMenuRef={ openMenuRef } />
			<Navbar closeMenuRef={ closeMenuRef } navbarRef={ navbarRef } />
			{ props.children }
			<Footer />
			<span id="back-to-top" className="scroll-selector cursor-pointer hidden fixed justify-center items-center right-8 md:right-12 bottom-8 rounded-full bg-green-400 text-white text-3xl w-16 h-16 md:w-18 md:h-18">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
					<path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
				</svg>
			</span>
			<div ref={ overlayRef } className="fixed hidden top-0 left-0 z-20 bg-black opacity-50 h-screen w-screen"></div>
			<div id="alert" className="fixed z-50 -top-32 rounded-xl left-2/4 transform -translate-x-2/4 bg-green-100 text-green-500 p-4 w-3/5 flex justify-between items-center">
				<span id="message">Message</span>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>
			{/*
				Since TailwindCSS uses treeshaking, classes not visible in jsx elements won't
				be generated. DynamicCssGenerator component helps generate all css styles used
				as javascript variables which are not visible to TailwindCSS at build time.
				Do not forget to add your dynamic classes to this component.
      */}
			<DynamicCssGenerator />
		</div>
	)
}