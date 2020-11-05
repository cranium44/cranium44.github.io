import ActionButton2 from '../ActionButton2/actionButton2.component';
import ActionButton from '../ActionButton/actionButton.component';
import './projects.styles.scss';
import Header from '../Header/header.component'
import Footer from '../Footer'
import React, { Component } from 'react'
import { porfolioProjects } from "../../data"

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
                        <div className='portfolio-section'>
                            {porfolioProjects.map((item) => {
                                return (
                                    <div className="portfolio-item">
                                        <h5>{item.title}</h5>
                                        <p className="description">{item.description}</p>
                                        <ul className="flex">{item.technologies.map((tech) => {
                                            return (
                                                <li className="item">{tech}</li>
                                            )
                                        })}</ul>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Projects;
