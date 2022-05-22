import React from 'react'
import Link from 'next/link'

export default class Contact extends React.Component {
    
    constructor() {
        super()
        this.contactUs = this.contactUs.bind(this);
        this.serializeArray = this.serializeArray.bind(this);
    }
    
    componentDidMount() {
        
    }

    // Serialize form element to an object
	serializeArray = ({form}) => {		
        let form_data = [];
        let serialize = {};
		Array.prototype.slice.call(form.elements).forEach(function(field) {
			if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1 ) {
				return;
			}
			if (field.type === 'select-multiple') {
				Array.prototype.slice.call(field.options).forEach(function(option) {
					if (!option.selected) {
						return;
                    }
					form_data.push({
						name: field.name,
						value: field.value
					})
				});
				return;
			}
			if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked) {
				return;
			}
			form_data.push({
				name: field.name,
				value: field.value
			})
		});
        
        //	Append additional data to business_data object from serialized filter object
        Object.entries(form_data).forEach(([key, value]) => {
            serialize[value.name] = value['value'];
        });

        return serialize;

	};
	

    contactUs = (e) => {
        e.preventDefault()

        const contactForm = document.querySelector('#contact-us');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        const contact = this.serializeArray({
            form: contactForm
        })

        submitBtn.textContent = 'Sending...';

        fetch('/api/contacts', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json', //	Content type sent
                'Accept': 'application/json',	//	Content type expected
            },
            body: JSON.stringify(contact)
        }).then(response => response.json())
        .then(response => {

            submitBtn.textContent = 'Send';

            // Append response message to feedback element
            if (response) {
                document.querySelector('#alert #message').textContent = response.data.message
            }

            // Display feedback element
            document.querySelector('#alert').classList.remove('-top-32');
            document.querySelector('#alert').classList.add('top-8');

            // Hide feedback element after set time
            const show_alert = setInterval(() => {
                document.querySelector('#alert #message').textContent = '';
                document.querySelector('#alert').classList.remove('top-8');
                document.querySelector('#alert').classList.add('-top-32');
                clearInterval(show_alert);
            }, 2000);

            if (response.success) {
                contactForm.reset();
            }
        
        }).catch(error => {
            console.error('Error while sending mail!')
        })

    }

    render() {

        return (

            <div className="relative pt-16 pb-0 px-0 md:mx-16 xl:px-32 w-full dark:bg-black">
                
                <div className="relative flex justify-center items-center w-3/4 lg:w-auto mb-8 lg:mb-0 mx-auto lg:absolute lg:-top-96 lg:-left-32 shadow-xl rounded-full overflow-hidden p-8 transform lg:scale-65 animation-all duration-1000 ease-in-out">
                    <img className="rounded-full" src="./images/illustrations/contact-us.png" alt="contact us illustration image" />
                </div>

                <h1 className="relative uppercase py-4 text-3xl md:text-4xl text-purple-600 mx-auto w-full text-center font-bold">
                    Contact us
                </h1>

                <div className="relative flex flex-wrap lg:flex-nowrap justify-around items-start p-0 md:p-4 w-full">

                    <div className="relative w-full md:w-2/4 m-0 p-4">

                        <form onSubmit={this.contactUs} id="contact-us" method="post" className="relative flex flex-wrap w-full m-0 px-2 lg:px-8 xl:px-0 py-2 lg:py-12">
                            
                            <div data-aos="fade-right" className="w-full lg:w-2/4 p-4">
                                <label className="text-purple-600 text-xl py-2" htmlFor="contact-us-email">Email</label>
                                <input type="email" placeholder="Email" name="email" id="contact-us-email" className="w-full outline-none ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>

                            <div data-aos="fade-right" className="w-full lg:w-2/4 p-4">
                                <label className="text-purple-600 text-xl py-2" htmlFor="contact-us-name">Full Name</label>
                                <input type="text" placeholder="Name" name="name" id="contact-us-name" className="w-full outline-none ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>

                            <div data-aos="fade-right" className="w-full lg:w-2/4 p-4">
                                <label className="text-purple-600 text-xl py-2" htmlFor="contact-us-phone">Phone</label>
                                <input type="text" placeholder="Phone" name="phone" id="contact-us-phone" className="w-full outline-none ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>

                            <div data-aos="fade-right" className="w-full lg:w-2/4 p-4">
                                <label className="text-purple-600 text-xl py-2" htmlFor="contact-us-location">Location</label>
                                <input type="text" placeholder="Location" name="location" id="contact-us-location" className="w-full outline-none ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>

                            <div data-aos="fade-right" className="w-full p-4">
                                <label className="text-purple-600 text-xl py-2" htmlFor="contact-us-message">Message</label>
                                <textarea placeholder="Write message..." name="message" id="contact-us-message" className="w-full outline-none h-32 ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>

                            <button type="submit" className="ripple-node w-auto py-3 px-12 ml-4 my-8 text-2xl rounded-xl ring ring-offset-2 ring-purple-600 focus:outline-none focus:select-none bg-purple-600 text-white">
                                Send
                            </button>

                        </form>

                    </div>

                    <div className="relative w-full md:w-2/4 m-0 p-0 md:pr-10 lg:pr-2 md:pl-4 md:py-4">

                        <div className="relative overflow-hidden w-full m-0 py-2 px-0 lg:p-12">
                            
                            <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 overflow-hidden flex justify-start lg:justify-center w-full m-0 py-2 lg:p-12">
                                <img src="./images/illustrations/man-on-laptop.png" alt="contact us section image" />
                            </div>
                            
                            <div className="relative bg-gradient-to-b from-transparent to-purple-200">
                                <h1 className="text-3xl p-4 mt-8 font-bold uppercase text-purple-600 text-center lg:text-left">
                                    Want to talk to us about something?
                                </h1>
                                <ul className="w-full bg-gray-100 bg-opacity-30 rounded-xl text-2xl text-gray-700 font-bold p-4">
                                    <li className="p-4 text-cente lg:text-left">Business?</li>
                                    <li className="p-4 text-cente lg:text-left">Feedback?</li>
                                    <li className="p-4 text-cente lg:text-left">Questions?</li>
                                </ul>
                                
                                <p className="text-xl text-white p-8 bg-purple-600 text-center">
                                    Do not keep it in mind, just hit the send button and you will be glad you did
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}
