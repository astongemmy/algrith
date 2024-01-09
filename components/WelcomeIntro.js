import ProductSearch from './ProductSearch';
import useTypist from '../hooks/useTypist';

const WelcomeIntro = ({ payload }) => {
  const { title, subtitle, accomodate, action, scroll_to } = payload;
  useTypist(title.text);

  return (
    <div id="intro-index" className="relative w-full h-auto lg:h-188 bg-intro-index-dark bg-right-top md:bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">
      <div className="bg-theme-primary/80 dark:bg-dark-mode-primary/90 h-full w-full 2xl:w-8/12 mx-auto flex justify-between items-center px-6 md:px-13 lg:px-23 xl:px-33 py-16">
        <div data-aos="fade" className="relative w-full lg:w-3/5">
          <span className="typing-pad w-full font-bold leading-tight md:leading-tight lg:leading-tight dark:text-dark-mode-octonary text-white text-5xl lg:text-7xl 2xl:text-8xl"></span>

          {subtitle.text && (
            <span className="block mt-4 text-theme-secondary font-nunito-black tracking-wide text-2xl font-semibold lg:text-3xl">
              {subtitle.text}
            </span>
          )}

          {action.text && (
            <a href={`#${scroll_to}`} className="mt-10 md:mt-16 scroll-selector inline-flex items-center gap-4 bg-theme-primary hover:bg-green-500 relative rounded-full text-xl capitalize text-white ml-2 px-8 py-4 select-none hover:select-none">
              <div className="w-8 w-8 absolute bg-green-600 -top-2 -left-2 md:-left-1 flex items-center justify-center -z-10">
                <div className="h-6 w-6 absolute top-1 z-10 rounded-full" />
                <div className="h-8 w-8 absolute top-0 rounded-full pointer-events-none">
                  <div className="h-full w-full animate-ping border border-theme-secondary rounded-full" />
                </div>
              </div>

              {action.text}
              {action.icon && <i className={action.icon}></i>}
            </a>
          )}
        </div>

        {/* <div className="hidden lg:block w-4/12 xl:w-5/12">
          <ProductSearch />
        </div> */}
      </div>
    </div>
  );
};

export default WelcomeIntro;
