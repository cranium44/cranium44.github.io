import React, { Component } from 'react'
import Header from '../Header/header.component'
import './landing.styles.scss'
import Home from '../Home';


class Landing extends Component {
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
                <Home />
            </div>
        )
    }
}


export default Landing;
