const HomePageReviews = ({ reviews }) => {    
  return (
    <>
      {reviews.map((review, index) => (
        <div key={ review.name } data-aos="fade-up" className="w-full md:w-1/3 m-4 md:m-0 px-2">
          <figure className="overflow-hidden 2xl:flex bg-slate-100 dark:bg-dark-mode-secondary rounded-xl p-8">
            <img className="w-24 h-24 rounded-full mx-auto" src={ review.avatar } alt={`reviewer_icon_${index + 1}`} />
            <div className="py-6 xl:pl-6 text-center xl:text-left space-y-4">
              <blockquote>
                <p className="text-lg dark:text-dark-mode-septenary text-gray-500">
                  { review.text }
                </p>
              </blockquote>
              
              <figcaption className="font-medium">
                <div className="text-xl text-sky-700 dark:text-theme-primary">
                  { review.name }
                </div>

                <div className="text-slate-700 dark:text-dark-mode-quinary">
                  { `${ review.designation }, ${ review.location }` }
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      ))}
    </>
  );
};

export default HomePageReviews;