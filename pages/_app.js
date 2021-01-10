import '../public/styles/App.css'
import '../public/styles/Icons.css'
import App from 'next/app'

export default class MyApp extends App {

    constructor() {
        super()
    }

    render() {

        const { Component, pageProps } = this.props

        return (
            <Component {...pageProps} />
        )

    }

}