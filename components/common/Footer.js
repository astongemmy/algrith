import React from 'react'

export default class Footer extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (

            <footer className="bg-gray-100">

 <details className="mx-6 my-4 transition-all ease-in-out duration-700 rounded-xl border-gray-300 border-2 border-solid">
            <summary className="flex justify-start items-center px-4 text-xl text-gray-600 focus:outline-none hover:outline-none outline-none">
                <span className="ml-4">Data for scientists</span>
            </summary>
            <p className="p-4 text-xl text-black">
                More Content for data scientists
            </p>
        </details>

<div className="w-full p-8 flex justify-between items-start flex-wrap">
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">Home</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">About</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">Contact Us</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">Support Us</a>
<a className="w-2/4 lg:text-center p-4 text-xl text-gray-600">FAQ</a>
</div>

                <a href="/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mx-6 py-6 text-xl">

                    Powered by <span className="ml-1 text-navyblue"> Algrith</span>
                    <img src="./images/logo/algrith.png" alt="Algrith Logo" className="logo" />

                </a>

            </footer>
            
        )
    }
    
}
