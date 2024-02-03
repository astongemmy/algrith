import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';
import { Global, css } from '@emotion/react';

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  }
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;