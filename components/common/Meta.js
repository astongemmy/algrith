import React from 'react'
import Head from 'next/head'

export default class Meta extends React.Component {

    constructor() {
        super()
    }

    render() {
        
        return (

            <Head>
                
                <html lang="en-US" />
                <meta name="theme-color" content="" />
                <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Algrith Official Website" />
                <meta property="og:description" name="description" content="Algrith Official Website" />
                <meta property="og:author" name="author" content="Aston Gemmy, Ilori Jide" />
                <meta property="og:keywords" name="keywords" content="Business, Artisans, Buyers, Sellers, Online Market, Sales" />
                <meta property="og:image" name="image" content="/images/logo/algrith.png" />
                <title> {this.props.title} </title>

                <link rel="shortcut icon" href="images/favicon/algrith.png" />

            </Head>

        )

    }

}