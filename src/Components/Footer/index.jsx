import React from 'react'
import { Twitter } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Instagram } from 'react-feather';
import { Facebook } from 'react-feather';
import "./footer.styles.scss"



const Footer = () => {
    return (
        <div className='row footer'>
            <div className='col-md-12 text-center'>
                <div className='sm-list'>
                    <Facebook className='icons' />
                    <Twitter className='icons' />
                    <Linkedin className='icons' />
                    <Instagram className='icons' />
                </div>
            </div>
        </div>
    );
};

export default Footer;
