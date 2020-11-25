import React from 'react';
import ActionButton2 from '../ActionButton2/actionButton2.component';
import './home.styles.scss';
import Footer from '../Footer';
import { NavLink } from "react-router-dom";
import "../styles.scss";

const Home = () => {
    return (
        <div className='home'>
            <div className=' row rrow'>
                <div className='col-md-5 image'>
                    <img src={require('../../assets/dummyimage.jpg')}/>
                </div>
                <div className='col-sm-12  col-md-7 column'>
                    <div className='left-text'>
                        <h2 className='main-text'>Hi,
                      My name is Adabe</h2>
                        <div className='sub-text'>I am a Software Engineer</div>
                        <div className='sub-text'>blah blah blah...</div>
                        <div className='action-buttons'>
                            {/* <div className='learn-more'>
                                <ActionButton>My Skills</ActionButton>
                            </div> */}
                            <div className='hire-gig'>
                                <NavLink exact to="contact" className='navItems' style={{textDecoration: 'none'}}><ActionButton2>Contact me</ActionButton2></NavLink>
                                
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

export default Home;
