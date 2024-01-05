import ProductSearch from './ProductSearch';
import useTyping from '../hooks/useTyping';

const WelcomeIntro = ({ payload }) => {
  const { title, subtitle, accomodate, action, scroll_to } = payload;
  useTyping(title.text);

  return (
    <div id="intro-index" className="relative w-full h-auto lg:h-188 bg-intro-index-dark bg-right-top md:bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">
      <div className="bg-green-500/80 md:bg-green-500/60 dark:bg-slate-900/90 h-full w-full 2xl:w-8/12 mx-auto flex justify-between items-center px-6 md:px-13 lg:px-23 xl:px-33 py-16">
        <div data-aos="fade" className="relative w-full lg:w-3/5">
          <span className="w-full font-bold leading-tight md:leading-tight lg:leading-tight dark:text-gray-300 text-white text-5xl lg:text-7xl 2xl:text-8xl intro-lead"></span>

          {subtitle.text && (
            <span className="block mt-4 text-yellow-300 font-nunito-black tracking-wide text-2xl font-semibold lg:text-3xl">
              {subtitle.text}
            </span>
          )}

          {action.text && (
            <a href={`#${scroll_to}`} className="mt-10 md:mt-16 scroll-selector inline-flex items-center gap-4 bg-green-500 md:bg-green-600 hover:bg-green-500 dark:bg-teal-700 dark:hover:bg-teal-600 relative rounded-full text-xl capitalize text-white ml-2 px-8 py-4 select-none hover:select-none">
              <div className="w-8 w-8 absolute bg-green-600 -top-2 -left-2 md:-left-1 flex items-center justify-center -z-10">
                <div className="h-6 w-6 absolute top-1 z-10 rounded-full" />
                <div className="h-8 w-8 absolute top-0 rounded-full pointer-events-none">
                  <div className="h-full w-full animate-ping border border-yellow-600 rounded-full" />
                </div>
              </div>

              {action.text}
              {action.icon && <i className={action.icon}></i>}
            </a>
          )}
        </div>

        <div className="hidden lg:block w-4/12 xl:w-5/12">
          <ProductSearch />
        </div>
      </div>
    </div>
  );
};

export default WelcomeIntro;
