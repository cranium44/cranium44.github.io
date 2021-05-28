import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Loader from 'react-loader-spinner'
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));
const About = lazy(() => import("./Components/About"));
const Landing = lazy(() => import("./Components/Landing"));

function App() {
    return (
        <BrowserRouter>
            <div className="App">

                <Suspense
                    fallback={
                        <div className="spinner">
                            <Loader
                                type="Puff"
                                color="#161318"
                                height={100}
                                width={100}
                                timeout={30000} //3 secs

                            />
                        </div>
                    }
                >
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
