import ActionButton2 from '../ActionButton2/actionButton2.component';
import ActionButton from '../ActionButton/actionButton.component';
import './projects.styles.scss';
import Header from '../Header/header.component'
import Footer from '../Footer'
import React, { Component } from 'react'


class Projects extends Component {
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
                        <h2 className='main-text'>My Projects</h2>
                        <div className='sub-text'>Here are some of my works</div>
                        <div className='action-buttons'>
                            {/* <div className='learn-more'>
                                <ActionButton>My Skills</ActionButton>
                            </div> */}
                            <div className='hire-gig'>
                                <ActionButton2>GitHub</ActionButton2>
                                <ActionButton>HackerRank</ActionButton>
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

export default Projects;
