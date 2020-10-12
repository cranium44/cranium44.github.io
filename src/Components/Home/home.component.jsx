import React from 'react';

import { Twitter } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Instagram } from 'react-feather';
import { Youtube } from 'react-feather';
import ActionButton from '../ActionButton/actionButton.component';
import ActionButton2 from '../ActionButton2/actionButton2.component';
import './home.styles.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className=' row rrow'>
                <div className='col-sm-12 column'>
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
                                <ActionButton2>Hire me</ActionButton2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='col-md-4 right-text'>


        </div> */}
            </div>

            <div className='row'>
                <div className='col-md-12 text-center'>
                    {/* <p className='follow-text text-center'>Follow me</p> */}
                    <div className='sm-list'>
                        <Twitter className='icons' />
                        <Linkedin className='icons' />
                        <Instagram className='icons' />
                        <Youtube className='icons' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
