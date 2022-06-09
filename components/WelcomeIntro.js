import React, { useEffect } from 'react'
import useTyping from '../hooks/useTyping'
import ProductSearch from './ProductSearch'

export default function WelcomeIntro({ payload }) {
	const { title, subtitle, accomodate, action, scroll_to } = payload
	const typing = useTyping(title.text)

	return (
		<div id="intro-index" className="relative w-full h-auto xl:h-126 dark:bg-black bg-intro-index bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">
			<div className="w-full relative px-4 md:px-3 lg:px-9 flex flex-wrap xl:flex-nowrap justify-around xl:justify-start items-center bg-gradient-to-b from-white bg-opacity-30">
				<div data-aos="fade" className="relative upercase w-full xl:w-3/5 text-green-500 m-0 px-4 md:px-10 py-8 lg:pr-0 lg:p-10 xl:p-20">
					<span className="w-full font-bold leading-tight text-5xl md:leading-tight md:text-5xl lg:leading-tight lg:text-8xl intro-lead"></span>
					{subtitle.text && <span className="block mt-4 text-gray-600 text-2xl font-medium lg:text-3xl"> {subtitle.text} </span>}
				</div>
				<div className="relative xl:absolute xl:right-20 xl:top-0 w-full xl:w-4/12 m-0 px-4 md:px-10 pt-8 pb-16 md:pb-20 lg:py-20">
					<div data-aos="fade-up" className="relative mx-auto">
						<ProductSearch />
						{action.text && <a href={`#${scroll_to}`} className="xl:hidden scroll-selector bg-green-600 relative rounded-full text-2xl font-bold capitalize text-white ml-2 mr-4 mt-0 mb-8 md:my-4 px-8 lg:px-16 py-4 lg:py-6 transform hover:scale-65 select-none hover:select-none">
							<div className="absolute -top-3 -left-3 md:-left-1 flex w-8 h-8">
								<div className="absolute inline-flex bg-yellow-500 w-full h-full animate-ping rounded-full"></div>
								<div className="relative inline-flex bg-green-400 w-8 h-8 rounded-full px-2 py-2"></div>
							</div>
							{action.text}
						</a>}
					</div>
				</div>
			</div>
		</div>
	)
}
