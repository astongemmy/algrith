import { PingAnimationWrapper, WelcomeIntroWrapper, CTAButton } from '../styled/welcome-intro.styled';
import ProductSearch from './ProductSearch';
import useTypist from '../hooks/useTypist';

const WelcomeIntro = ({ payload }) => {
  const { title, subtitle, accomodate, action, scroll_to } = payload;
  useTypist(title.text);

  return (
    <WelcomeIntroWrapper id="intro-index">
      <div className="container-area">
        <div data-aos="fade" className="left">
          <span className="typing-pad"></span>

          {subtitle.text && (
            <span className="subtext">
              {subtitle.text}
            </span>
          )}

          {action.text && (
            <CTAButton href={`#${scroll_to}`} className="scroll-selector">
              <PingAnimationWrapper>
                <div className="animator">
                  <div className="background" />
                </div>
              </PingAnimationWrapper>

              {action.text}
              {action.icon && <i className={action.icon}></i>}
            </CTAButton>
          )}
        </div>

        {/* <div className="right">
          <ProductSearch />
        </div> */}
      </div>
    </WelcomeIntroWrapper>
  );
};

export default WelcomeIntro;
