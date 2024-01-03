import Document, { Html, Head, Main, NextScript } from "next/document";

const AppDocument = () => {
  return (
    <Html lang="en-US" className="">
      <Head>
        <meta name="msapplication-TileColor" content="" />
        <meta name="theme-color" content="" />

        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <meta property="og:keywords" name="keywords" content="Business, Artisans, Buyers, Sellers, Online Market, Sales" />
        <meta property="og:image" name="image" content="/images/logo/algrith-transparent.png" />
        <meta property="og:description" name="description" content="Algrith LLC Website" />
        <meta property="og:author" name="author" content="Algrith LLC" />
        <meta name="description" content="Algrith LLC" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="mask-icon" color="#5bbad5" href="/images/favicon/safari-pinned-tab.svg" />
        <link rel="icon" type="image/png" href="/images/favicon/apple-touch-icon.png" />
        <link rel="shortcut icon" type="image/png" href="/images/favicon/favicon.ico" />

        <script type="text/javascript" src="/js/aos.js"></script>
      </Head>

      <body className="dark:bg-slate-900 dark:text-slate-300">
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