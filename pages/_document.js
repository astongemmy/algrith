import Document, { Html, Head, Main, NextScript } from 'next/document';

const AppDocument = () => {
  return (
    <Html lang="en-US">
      <Head>
        <meta name="msapplication-TileColor" content={process.env.NEXT_PUBLIC_PRIMARY_THEME_COLOR} />
        <meta name="theme-color" content="#ffffff" />

        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <meta property="og:keywords" name="keywords" content="Business, Artisans, Buyers, Sellers, Online Market, Sales" />
        <meta property="og:image" name="image" content="/images/logo/algrith-transparent.png" />
        <meta property="og:description" name="description" content="Algrith Website" />
        <meta property="og:author" name="author" content="Algrith LLC" />
        <meta name="description" content="Algrith LLC" />
        
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color={process.env.NEXT_PUBLIC_PRIMARY_THEME_COLOR} />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" type="image/png" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" type="image/png" href="/images/favicon/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest.json" />

        <script type="text/javascript" src="/js/aos.js"></script>
      </Head>

      <body className="dark:bg-dark-mode-primary dark:text-dark-mode-septenary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

AppDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

export default AppDocument;