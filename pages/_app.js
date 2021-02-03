import '../public/styles/App.css'
import '../public/styles/Icons.css'
import '../public/styles/aos.css'
import '../public/styles/animate.css'
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {

    constructor() {
        super()
    }

    render() {

        const { Component, pageProps } = this.props

        return (
<Html lang="en-US">
                
                <Head>
                    <meta name="theme-color" content="" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="images/favicon/ms-icon-144x144.png" />
                    
                    <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content="Algrith Official Website" />
                    <meta property="og:description" name="description" content="Algrith Official Website" />
                    <meta property="og:author" name="author" content="Aston Gemmy, Ilori Jide" />
                    <meta property="og:keywords" name="keywords" content="Business, Artisans, Buyers, Sellers, Online Market, Sales" />
                    <meta property="og:image" name="image" content="/images/logo/algrith.png" />
                    <link rel="manifest" href="/manifest.json" />

                    <link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="images/favicon/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png" />
                        
                    <link rel="shortcut icon" href="images/favicon/algrith.png" />
                    <script type="text/javascript" src="/js/aos.js"></script>
                </Head>
            <Component {...pageProps} />
        )

    }

}
