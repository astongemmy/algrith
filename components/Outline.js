const Outline = ({ outline }) => {
	const { title, items, illustration } = outline;

	const outlines = items.map((outline) => {
		return (
			<div key={outline.title} data-aos="fade-up" className="w-full md:w-1/2 lg:w-1/3 m-4 md:m-0 p-2 md:pb-10 md:px-3 lg:p-4 xl:px-8 2xl:px-4">
				<div className="overflow-hidden w-full px-6 pb-16 dark:bg-slate-800 bg-white dark:text-dark-mode-septenary text-gray-500 text-lg md:leading-9 rounded-xl text-center shadow dark:shadow-none md:min-h-84 lg:min-h-80">
					<div className="pt-6 w-full flex justify-between">
						<span className="flex justify-center items-center p-2 text-md text-white bg-theme-primary w-10 h-10 rounded-full shadow-lg">
							<i className={outline.icon}></i>
						</span>

						<h3 className="text-sm tracking-widest font-public-sans italic text-theme-secondary">
							{outline.subtitle}
						</h3>
					</div>

					<h2 className="text-xl text-theme-primary font-bold mb-4 mt-8">
						{outline.title}
					</h2>

					{/* <span className="flex justify-center items-center my-8 mx-auto p-1 text-4xl text-white bg-theme-primary w-20 h-20 rounded-full">
						<i className={outline.icon}></i>
					</span> */}
					
					{outline.content}
				</div>
			</div>
		)
	});

	return (
		<div id="outline" className="relative pt-16 pb-4 px-1 2xl:px-32 w-full 2xl:w-8/12 2xl:mx-auto">
			<div
				className={`
				  shadow-xl rounded-full overflow-hidden p-6 md:p-8 transform 
					md:-${illustration.align.y}-${illustration.dimension.md.y} 
					md:-${illustration.align.x}-${illustration.dimension.md.x} 
					lg:-${illustration.align.y}-${illustration.dimension.lg.y} 
					lg:-${illustration.align.x}-${illustration.dimension.lg.x} 
					md:scale-${illustration.dimension.md.scale} 
					lg:scale-${illustration.dimension.lg.scale} 
					animation-all duration-1000 ease-in-out
					mb-8 lg:mb-0 mx-auto md:absolute
					items-center w-11/12
					md:w-2/4 lg:w-auto
					justify-center
					relative flex
			`}>
				<img className="rounded-full filter dark:brightness-75" src={illustration.src} alt={`${title}_illustration`} />
			</div>
			
			<h1 className="relative text-5xl leading-tight sm:leading-tight font-extrabold tracking-tight dark:text-slate-200 text-gray-900 sm:text-5xl py-4 mx-auto w-full text-center">
				{title}
			</h1>

			<div className="relative flex flex-wrap 2xl:flex-nowrap justify-around 2xl:justify-between py-4 md:pt-16 lg:pb-16 px-2 md:px-10 lg:px-14 xl:px-32 2xl:px-0 w-full">
				{outlines}
			</div>
		</div>
	);
};

export default Outline;