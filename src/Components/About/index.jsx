import React, { Component } from 'react'
import './about.styles.scss';
import Header from '../Header/header.component'
import Footer from '../Footer';
import { about, interests } from "../../data"
import "../styles.scss";

class About extends Component {
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
                        <div className='about_me-img'>
                            <img src={require('../../assets/dummyimage.jpg')} />
                        </div>
                        <h2 className='main-text'>About Me</h2>
                        <div className="about-me">
                            <p className="description" >{about}</p>
                        </div>
                        <div className='sub-text'><h3>Interests</h3></div>
                        <div className='interests'>
                            <ul>
                                {interests.map((interest) => {
                                    return (
                                        <li >{interest}</li>
                                    )
                                })}
                            </ul>
                            <div className='hire-gig'>
                            </div>
                        </div>
                    </div>
                </div> 
             </div>

            <Footer />
        </div>
    );
};

export default About;
