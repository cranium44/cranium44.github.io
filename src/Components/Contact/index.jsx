import React, { Component, useState } from 'react'
import ActionButton2 from '../ActionButton2/actionButton2.component';
import emailjs from 'emailjs-com'
import apikeys from './appkeys'
import './contact.styles.scss';
import Header from '../Header/header.component'
import { contactDetails } from '../../data';
import { Twitter } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Instagram } from 'react-feather';
import { Facebook } from 'react-feather';
import "../styles.scss";



class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loader: true,
            welcomeText: ''
        }
    }
 

    componentDidMount() {
        this.setState({
            loader: false
        })
    }
    render() {
        return (
            <div className='landing-page'>
                <Header />
                <App />
            </div>
        )
    }
}



const App = () => {
    const [response , setResponse] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('gmail', apikeys.TEMPLATE_ID, e.target, apikeys.USER_ID)
            .then(result => {
                console.log(result.text)
                if (result.text === 'OK') {
                    setResponse('success')
                }
            },
                error => {
                    
                    setResponse(error.text)
                })
        e.target.reset();
    }
    

    return (
        <div className='home'>
            <div className=' row rrow'>
                <div className='col-sm-12 column'>
                    <div className='left-text'>
                        <h2 className='main-text'>
                            Get in Touch</h2>
                        <div className='card card-width shadow border-0 p-2'>
                            <div className='row1 p-3'>
                                <form onSubmit={onSubmit} method=''> 
                                    <h4>{response}</h4>
                                    <div className="form-group form-width">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" name="name" placeholder="Enter Name" />

                                    </div>
                                    <div className="form-group form-width">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" />

                                    </div>
                                    <div className="form-group form-width">
                                        <label htmlFor="exampleInputEmail1">Subject</label>
                                        <input type="subject" className="form-control" id="exampleInputSubject" aria-describedby="SubjectHelp" name="subject" placeholder="Enter Subject" />

                                    </div>
                                    <div className="form-group form-width">
                                        <label htmlFor="exampleInputPassword1">Message</label>
                                        <textarea type="text" className="form-control" id="exampleInputPassword1" name="message"></textarea>
                                    </div>
                                   
                                        <div className='center '>
                                            <ActionButton2>Submit</ActionButton2>
                                        
                                        </div>
                                    
                                </form>

                            </div>
                            <div className='row2 p-3'>
                                <h4 className='mt-5'>Contact Info</h4>  

                                <div className='mt-5'>
                                    <h5>Email me at</h5>
                                    <p>{contactDetails.email}</p>
                                </div> 
                                <div className='mt-5'>
                                    <h5>Call me at</h5>
                                    <p><a href={`Tel: ${contactDetails.phone}`} style={{textDecoration: 'none'}}>{contactDetails.phone}</a></p>
                                </div>

                                <div className='row footer'>
                                    <div className='col-md-12 text-center'>
                                        <div className='sm-list'>
                                            <a href={contactDetails.facebook}> <Facebook className='icons' /> </a>
                                            
                                            <a href={contactDetails.twitter}><Twitter className='icons' /></a>
                                            <a href={contactDetails.linkedin}><Linkedin className='icons' /></a>
                                            <a href={contactDetails.instagram}><Instagram className='icons' /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
};

export default Contact;
