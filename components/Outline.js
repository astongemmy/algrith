import React from 'react'

export default function Outline({ outline }) {
	const { title, items, illustration } = outline;
	const outlines = items.map((outline) => {
		return (
			<div key={outline.title} data-aos="fade-up" className="w-full md:w-1/3 m-4 md:m-0 p-2 md:py-10 md:px-3 lg:p-4 xl:px-8 2xl:px-4">
				<div className="relative overflow-hidden w-full pt-24 pb-16 px-8 md:px-4 lg:p-16 dark:bg-slate-800 bg-gray-50 dark:text-slate-300 text-gray-500 text-xl md:leading-9 rounded-xl text-center shadow dark:shadow-none">
					<span className="dark:bg-slate-700 bg-white absolute left-0 top-0 w-full py-2 px-6 flex justify-between items-center">
						<span className="flex justify-center items-center p-2 text-md text-white dark:bg-opacity-50 bg-green-500 w-10 h-10 rounded-full">
							<i className={outline.icon}></i>
						</span>
						<h2 className="text-md dark:text-teal-300 text-gray-900">
							{outline.subtitle}
						</h2>
					</span>
					<h2 className="text-2xl text-green-500 dark:text-green-300 font-bold my-4">
						{outline.title}
					</h2>
					{/* <span className="flex justify-center items-center my-8 mx-auto p-1 text-4xl text-white bg-green-500 w-20 h-20 rounded-full">
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
					md:-${illustration.align.y}-${illustration.dimension.md.y} 
					md:-${illustration.align.x}-${illustration.dimension.md.x} 
					lg:-${illustration.align.y}-${illustration.dimension.lg.y} 
					lg:-${illustration.align.x}-${illustration.dimension.lg.x} 
					shadow-xl rounded-full overflow-hidden p-8 transform 
					md:scale-${illustration.dimension.md.scale} 
					lg:scale-${illustration.dimension.lg.scale} 
					animation-all duration-1000 ease-in-out
					mb-8 lg:mb-0 mx-auto md:absolute
					items-center w-3/4 
					md:w-2/4 lg:w-auto
					justify-center
					relative flex
			`}>
				<img className="rounded-full filter dark:brightness-75" src={illustration.src} alt={`${title}-illustration`} />
			</div>
			{/* <h1 className="relative uppercase py-4 text-3xl md:text-4xl dark:text-slate-300 text-gray-600 mx-auto w-full text-center font-bold"> */}
			<h1 className="relative text-5xl leading-tight sm:leading-tight font-extrabold tracking-tight dark:text-slate-200 text-gray-900 sm:text-5xl py-4 mx-auto w-full text-center">
				{title}
			</h1>
			<div className="relative flex flex-wrap xl:flex-nowrap justify-around xl:justify-between items-center py-4 lg:py-16 px-2 md:px-10 lg:px-14 xl:px-32 2xl:px-0 w-full">
				{outlines}
			</div>
		</div>
	)
}