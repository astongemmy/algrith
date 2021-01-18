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
                    <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content="Algrith Official Website" />
                    <meta property="og:description" name="description" content="Algrith Official Website" />
                    <meta property="og:author" name="author" content="Aston Gemmy, Ilori Jide" />
                    <meta property="og:keywords" name="keywords" content="Business, Artisans, Buyers, Sellers, Online Market, Sales" />
                    <meta property="og:image" name="image" content="/images/logo/algrith.png" />
                    <link rel="shortcut icon" href="images/favicon/algrith.png" />
                </Head>
                
                <body>
                    
                    <Main />
                    <NextScript />
                    
                </body>

<script type="text/javascript" src="/public/aos.js"></script>
                
            </Html>
            
        )
    
    }

}
