import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)        
        return { ...initialProps }    
    }
    
    render() {        
        return (        
            <Html lang="en-US">                
                <Head>
                    <meta name="theme-color" content="" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    {/* <meta name="msapplication-TileImage" content="images/favicon/ms-icon-144x144.png" /> */}
                    
                    <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content="Algrith LLC" />
                    <meta property="og:description" name="description" content="Algrith LLC Website" />
                    <meta property="og:author" name="author" content="Algrith LLC" />
                    <meta property="og:keywords" name="keywords" content="Business, Artisans, Buyers, Sellers, Online Market, Sales" />
                    <meta property="og:image" name="image" content="../images/logo/algrith.png" />
                    <link rel="manifest" href="/manifest.json" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

                    <link rel="icon" type="image/png" sizes="512x512" href="../images/favicon/android-chrome-512x512.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="../images/favicon/android-chrome-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon/favicon-16x16.png" />
                    <link rel="icon" type="image/png" href="../images/favicon/apple-touch-icon.png" />
                    <link rel="shortcut icon" type="image/png" href="../images/favicon/favicon.ico" />
                    
                    <script type="text/javascript" src="/js/aos.js"></script>
                </Head>
                
                <body>                    
                    <Main />
                    <NextScript />                    
                </body>
            </Html>
        )    
    }
}