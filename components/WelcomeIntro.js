import ProductSearch from './ProductSearch';
import useTyping from '../hooks/useTyping';

const WelcomeIntro = ({ payload }) => {
	const { title, subtitle, accomodate, action, scroll_to } = payload;
	useTyping(title.text);

	return (
		<div id="intro-index" className="relative w-full h-auto lg:h-126 xl:h-144 bg-intro-index bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">
			<div className="h-full w-full relative px-4 md:px-3 lg:px-9 2xl:px-0 flex flex-wrap lg:flex-nowrap justify-around xl:justify-start items-center bg-gradient-to-b dark:from-slate-900 from-white">
				<div className="relative w-full 2xl:w-8/12 2xl:mx-auto h-full">
					<div data-aos="fade" className="relative w-full lg:w-3/5 text-green-500 dark:text-navyblue m-0 px-2 md:px-10 2xl:px-0 lg:pr-0 pt-8 pb-16 lg:p-10 xl:p-20 2xl:py-20">
						<span className="w-full font-bold leading-tight md:leading-tight lg:leading-tight text-5xl lg:text-7xl 2xl:text-8xl intro-lead"></span>
						
						{subtitle.text && (
						  <span className="block mt-4 dark:text-slate-700 text-gray-600 text-2xl font-semibold lg:text-3xl">
							  {subtitle.text}
							</span>
						)}

						{action.text && <a href={`#${scroll_to}`} className="mt-10 md:mt-16 scroll-selector inline-block dark:bg-green-500 bg-green-600 relative rounded-full text-xl capitalize text-white ml-2 px-8 py-4 transform hover:scale-65 select-none hover:select-none">
							<div className="w-8 w-8 absolute bg-green-600 -top-2 -left-2 md:-left-1 flex items-center justify-center -z-10">
								<div className="h-6 w-6 absolute top-1 z-10 rounded-full" />
								<div className="h-8 w-8 absolute top-0 rounded-full pointer-events-none">
									<div className="h-full w-full animate-ping border border-yellow-600 rounded-full" />
								</div>
							</div>
							{action.text}
							{action.icon && <i className={action.icon}></i>}
						</a>}
					</div>
					<div className="hidden lg:block relative lg:absolute lg:right-12 xl:right-20 lg:top-0 w-full lg:w-4/12 m-0 px-4 md:px-10 lg:px-0 pt-8 lg:pt-16 xl:pt-20 pb-16 md:pb-20 lg:pb-0">
						<ProductSearch />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomeIntro;