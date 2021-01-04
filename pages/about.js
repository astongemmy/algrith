import React from 'react'
import Link from 'next/link'

export default class About extends React.Component {

    constructor() {
        super()
    }

    render() {
        
        return (
            <>
                <h1>About Page</h1>
                <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
                </h2>
            </>
        )
        
    }

}