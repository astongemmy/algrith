import React from 'react'

export default class Footer extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (

            <footer className="p-4">

                <a href="/" target="_blank" rel="noopener noreferrer" className="text-xl">

                    Powered by <h2 className="ml-1 text-green-600"> Algrith</h2>
                    <img src="./images/logo/algrith.png" alt="Algrith Logo" className="logo" />

                </a>

            </footer>
            
        )
    }
    
}
