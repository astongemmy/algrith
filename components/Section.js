import HomePageReviews from './HomePageReviews';

const Section = ({ payload }) => {
  const { title, items, illustration } = payload;

  return (
    <div id={title.text} className="relative py-8 md:py-16 px-1 xxl:px-24 w-full 2xl:w-8/12 2xl:mx-auto">
      <div
        className={`
          shadow-xl rounded-full overflow-hidden p-6 md:p-8 transform
          md:-${illustration.align.y}-${illustration.dimension.md.y} 
          md:-${illustration.align.x}-${illustration.dimension.md.x} 
          lg:-${illustration.align.y}-${illustration.dimension.lg.y} 
          lg:-${illustration.align.x}-${illustration.dimension.lg.x}  
          w-11/12 md:2/4 lg:w-auto mb-8 lg:mb-0 mx-auto md:absolute 
          md:scale-${illustration.dimension.md.scale} 
          lg:scale-${illustration.dimension.lg.scale} 
          animation-all duration-1000 ease-in-out
          justify-center items-center 
          filter dark:brightness-75 
          relative flex
        `}>
        <img className="rounded-full" src={illustration.src} alt={`${title.text}-illustration`} />
      </div>
      <h1 className={`text-center md:text-${title.align} relative uppercase py-4 text-3xl md:text-4xl dark:text-gray-300 text-gray-600 mx-auto w-full md:w-11/12 lg:px-3 xl:px-10 font-bold`}>
        {title.text}
      </h1>
      <div className="relative flex flex-wrap xl:flex-nowrap justify-start lg:justify-between items-center bg-grey-900 py-4 lg:py-16 px-1 md:px-9 lg:px-16 xl:px-28 w-full xl:space-x-4">
        {(title.text.toLowerCase() == 'reviews' && <HomePageReviews reviews={items} />)}
      </div>
    </div>
  );
};

export default Section;