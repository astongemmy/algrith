import tw, { styled } from 'twin.macro';

export const WelcomeIntroWrapper = styled.div`
  ${tw`relative w-full h-auto lg:h-188 bg-intro-index bg-right-top md:bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat`};
  
  .container-area {
    ${tw`bg-theme-primary/80 dark:bg-dark-mode-primary/90 h-full w-full 2xl:w-8/12 mx-auto flex justify-between items-center px-6 md:px-13 lg:px-23 xl:px-33 py-16`};

    .right {
      ${tw`hidden lg:block w-4/12 xl:w-5/12`};
    }

    .left {
      ${tw`relative w-full lg:w-3/5`};
    }
  }

  .typing-pad {
    ${tw`w-full font-bold leading-tight md:leading-tight lg:leading-tight dark:text-dark-mode-octonary text-white text-5xl lg:text-7xl 2xl:text-8xl`};
  }

  .subtext {
    ${tw`block mt-4 text-theme-secondary font-nunito-black tracking-wide text-2xl font-semibold lg:text-3xl`};
  }
`;

export const PingAnimationWrapper = styled.div`
  ${tw`w-8 w-8 absolute bg-green-600 -top-2 -left-2 md:-left-1 flex items-center justify-center -z-10`};
  
  .animator {
    ${tw`h-8 w-8 absolute top-0 rounded-full pointer-events-none`};
    
    .background {
      ${tw`h-full w-full animate-ping border border-theme-secondary rounded-full`};
    }
  }
`;

export const CTAButton = styled.a`
  ${tw`mt-10 md:mt-16 inline-flex items-center gap-4 bg-theme-primary hover:bg-green-500 relative rounded-full text-xl capitalize text-white ml-2 px-8 py-4 select-none hover:select-none`};
`;