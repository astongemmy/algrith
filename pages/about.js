import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Styles from '../components/styles/about/about.module.css'
import Intro from '../components/index/Intro'
import Outline from '../components/index/Outline'

export default class About extends React.Component {
  
    constructor() {
        super()
        this.Fetch = this.Fetch.bind(this)
    }

    componentDidMount() {
        this.Fetch()
    }

    componentWillUnmount() {
        
    }

    // Serialize form element to an object
	// serializeArray = ({form}) => {		
    //     let form_data = [];
    //     let serialize ={};
    //     Array.prototype.slice.call(form.elements).forEach(function(field) {
    //         if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1 ) {
    //             return;
    //         }
    //         if (field.type === 'select-multiple') {
    //             Array.prototype.slice.call(field.options).forEach(function(option) {
    //                 if (!option.selected) {
    //                     return;
    //                 }
    //                 form_data.push({
    //                     name: field.name,
    //                     value: field.value
    //                 })
    //             });
    //             return;
    //         }
    //         if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked) {
    //             return;
    //         }
    //         form_data.push({
    //             name: field.name,
    //             value: field.value
    //         })
    //     });

    //     // Append current filter data to business_data object from serialized filter object
    //     Object.entries(form_data).forEach(([key, value]) => {
    //         serialize[value.name] = value['value'];
    //     });
    //     return serialize;
    // }
	
    
    Fetch = () => {

        // const contact = this.serializeArray({
        //     form: document.querySelector('#contact-us')
        // })
        
        fetch('http://localhost:3000/api/contacts', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json', //	Content type sent
                'Accept': 'application/json',	//	Content type expected
                // 'Authorization': 'Basic ' + btoa(username + ':' + password),	//	Authentication credentials
            },
            body: JSON.stringify('')
        }).then(response => response.json())
        .then(response => {
            alert(JSON.stringify(response))
        }).catch(error => {
            alert(error)
        })
    
    }
    
    render() {
        
        return (
        
            <Layout>
                
                <Head>
                    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
                    <title> About | Algrith </title>
                </Head>

                <main>

                    <Intro />

                    <Outline />             
                
                </main>

            </Layout>
    
        )
    
    }

}
