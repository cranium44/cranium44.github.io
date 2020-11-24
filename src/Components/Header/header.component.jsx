import React, { Component } from 'react';
import './header.styles.scss';
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navVisibility: false
        };
    }

    handleClick = () => {
        if (this.state.navVisibility === false) {
            this.setState({
                navVisibility: true

            });
        }
    }

    closeNav = () => {
        if (this.state.navVisibility === true) {
            this.setState({
                navVisibility: false
            });
        }
    }
    render() {
        const { navVisibility } = this.state
        return (
            <div className='header'>
                <nav>
                    <div className='nav-brand'>

                    </div>
                    <div className='hambg' onClick={this.handleClick}>
                        <svg className='hamburger' width='30' height='30' viewBox='0 0 25 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect width='25' height='3' fill='#292A2C' />
                            <rect x='12' y='10' width='13' height='3' fill='#292A2C' />
                            <rect x='7' y='5' width='18' height='3' fill='#292A2C' />
                        </svg>

                        {/* <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect width='2.20965' height='15.4675' transform='matrix(0.728885 0.684637 -0.68464 0.728881 11.0962 0.213196)' fill='white' />
                            <rect width='15.4675' height='2.20965' transform='matrix(0.728885 0.684637 -0.68464 0.728881 1.72595 0.50647)' fill='white' />
                        </svg> */}



                        {
                            navVisibility ?
                                <ul className='navShowing'>
                                    <NavLink
                                        activeClassName=""
                                        exact
                                        to="/"
                                        className="navItems"
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink activeClassName="" exact to="about" className='navItems'>About me</NavLink>
                                    <NavLink activeClassName="" exact to="projects" className='navItems'>Projects</NavLink>
                                    <NavLink activeClassName="" exact to="contact" className='navItems'>Contact</NavLink>
                                    {/* <NavLink activeClassName="" exact to="skills" className='navItems'>Skills</NavLink> */}
                                    <NavLink activeClassName="" exact to="contact" className='navItems'>Get in touch</NavLink>
                                    <li className='navClose text-center' onClick={this.closeNav}>
                                        <svg width='19' height='19' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <rect width='2.20965' height='15.4675' transform='matrix(0.728885 0.684637 -0.68464 0.728881 11.0962 0.213196)' fill='white' />
                                            <rect width='15.4675' height='2.20965' transform='matrix(0.728885 0.684637 -0.68464 0.728881 1.72595 0.50647)' fill='white' />
                                        </svg>
                                    </li>
                                </ul> :
                                null
                        }
                    </div>
                </nav>


            </div>
        )
    }
};


export default Header;
