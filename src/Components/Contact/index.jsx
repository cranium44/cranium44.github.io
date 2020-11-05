import React, { Component } from 'react'
import ActionButton2 from '../ActionButton2/actionButton2.component';
import './contact.styles.scss';
import Header from '../Header/header.component'
import Footer from '../Footer';


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
    return (
        <div className='home'>
            <div className=' row rrow'>
                <div className='col-sm-12 column'>
                    <div className='left-text'>
                        <h2 className='main-text'>
                            Contact Me</h2>
                        <div className='sub-text'>Contact Me</div>
                        {/* <div className='sub-text'>blah blah blah...</div> */}
                        <div className='action-buttons'>
                            {/* <div className='learn-more'>
                                <ActionButton>My Skills</ActionButton>
                            </div> */}
                            <div className='hire-gig'>
                                <ActionButton2>Call me</ActionButton2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='col-md-4 right-text'>


        </div> */}
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
