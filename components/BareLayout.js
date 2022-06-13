import React, { useEffect, useRef } from 'react'
import DynamicCssGenerator from './DynamicCssGenerator'
import useRippleEffect from '../hooks/useRippleEffect'
import ThemeSwitch from './ThemeSwitch'

export default function BareLayout(props) {
	useEffect(() => { AOS.init({ easing: 'ease-in-out-sine' }) }, [])
	useRippleEffect()
	return (
		<div>
			<ThemeSwitch />
			{props.children}
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