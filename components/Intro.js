import React from 'react';

import useTypist from '../hooks/useTypist';

const Intro = ({ payload }) => {
	const { title, description, slogan, accomodate, scroll_to } = payload;
	useTypist(title.text);

	return (
		<div id="intro-about" className="relative w-full bg-intro-about bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">
			<div className="w-full h-full bg-gradient-to-b from-white dark:from-slate-900 dark:bg-slate-900/90 pt-0 lg:pt-12 pb-12 lg:pb-20 px-8 md:px-12 lg:px-18 xl:px-24">
				<div className=" 2xl:w-8/12 mx-auto relative">
					{title.text && <h1 data-aos="fade-down" className={`typing-pad relative ${title.case ? title.case : ''} text-3xl md:text-4xl lg:text-7xl dark:text-gray-300 text-algrith-green py-8 m-0 w-full text-${title.align ? title.align : 'center'} font-bold`}></h1>}
					
					{description.text && <p data-aos="fade-up" className={`w-full md:whitespace-pre ${description.case ? description.case : ''} text-${description.align ? description.align : 'center'} dark:text-slate-400 text-gray-700 leading-relaxed text-xl lg:leading-relaxed lg:text-2xl`}>
						{description.text}
					</p>}
					
					{slogan && <aside data-aos="fade-right" className={`${accomodate ? 'mb-16' : ''} mt-4 md:mt-8 ${description.case ? description.case : ''} text-${description.align ? description.align : 'center'} font-nunito-black dark:text-algrith-yellow text-navyblue text-lg font-bold lg:text-2xl`}>
						{slogan}
					</aside>}
				</div>

				{scroll_to && <span href={`#${scroll_to}`} className={`${accomodate ? 'hidden md:flex' : 'flex'} ripple-node scroll-selector cursor-pointer absolute justify-center items-center right-8 md:right-12 lg:right-32 -bottom-8 rounded-full bg-algrith-green text-white text-3xl w-16 h-16 md:w-18 md:h-18 z-10`}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
					</svg>
				</span>}
			</div>
		</div>
	);
};

export default Intro;
