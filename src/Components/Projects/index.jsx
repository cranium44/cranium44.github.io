import "./projects.styles.scss";
import Header from "../Header/header.component";
import "../ActionButton2/actionButton2.styles.scss"
import Footer from "../Footer";
import React, { Component } from "react";
import { porfolioProjects } from "../../data";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import { GitHub } from 'react-feather';

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      {
        porfolioProjects.map((item) => {
          return (
            <>
              {
                (props.active === item.id) ? 
                  <>
                  <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        <img src={item.image} style={{ maxHeight: '300px', width: '100%' }} /> <br />
                      {item.title}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      {item.description}
                    </p>
                      <ul className="flex">
                        {item.technologies.map((tech) => {
                          return <li className="item"  >{tech}</li>;
                        })}
                      </ul>
                  </Modal.Body>
                  {/* <Modal.Footer> */}
                      {/* <ActionButton2> */}
                      {/* <button className='action-btn2' onClick={props.onHide}>Close</button> */}
                      {/* </ActionButton2> */}
                  {/* </Modal.Footer> */}
                   </> : ''
              }

              </>
            )
        })
      }
    </Modal>
  );
}

function MainModal() {
  const [modalShow, setModalShow] = React.useState(false);
  const [active, setactive] = React.useState('')
  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      `     </Button> */}
      <div className="home">
        <div className=" row rrow">
          <div className="col-sm-12 column">
            <div className="left-text">
              <h2 className="main-text">My Projects</h2>
              <div className="sub-text">Here are some of my works</div>
              <div className="portfolio-section">
                {porfolioProjects.map((item) => {
                  return (
                    
                    <div className="portfolio-item card m-3"  onClick={() => { setModalShow(true); setactive(item.id) }} >
                      <img src={item.image}  style={{maxHeight: '300px'}}/>
                      <h5>{item.title}</h5>
                      <p className="description">{item.description}</p>
                      <ul className="flex">
                        {item.technologies.map((tech) => {
                          return  <li className="item"  >{tech}</li>
                            ;
                        })}
                        <GitHub className='icons' />
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <MyModal
        show={modalShow}
        active={active}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


// export default App;

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      welcomeText: "",
    };
  }

  componentDidMount() {
    this.setState({
      loader: false,
    });
  }
  render() {
    return (
      <div className="landing-page">
        <Header />
        
        <MainModal />
      </div>
    );
  }
}



export default Projects;
