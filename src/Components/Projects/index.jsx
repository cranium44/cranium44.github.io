import "./projects.styles.scss";
import Header from "../Header/header.component";
import Footer from "../Footer";
import React, { Component } from "react";
import { porfolioProjects } from "../../data";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

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
                      {item.title}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* <h4>Centered Modal</h4> */}
                    <p>
                      {item.description}
                    </p>
                      <ul className="flex">
                        {item.technologies.map((tech) => {
                          return <li className="item"  >{tech}</li>;
                        })}
                      </ul>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                  </Modal.Footer> </> : ''
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
                    <div className="portfolio-item" onClick={() => {setModalShow(true); setactive(item.id)}} >
                      <h5>{item.title}</h5>
                      <p className="description">{item.description}</p>
                      <ul className="flex">
                        {item.technologies.map((tech) => {
                          return <li className="item"  >{tech}</li>;
                        })}
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

// const App = () => {
//   return (
//     <>
//     <div className="home">
//       <div className=" row rrow">
//         <div className="col-sm-12 column">
//           <div className="left-text">
//             <h2 className="main-text">My Projects</h2>
//             <div className="sub-text">Here are some of my works</div>
//             <div className="portfolio-section">
//               {porfolioProjects.map((item) => {
//                 return (
//                   <div className="portfolio-item" >
//                     <h5>{item.title}</h5>
//                     <p className="description">{item.description}</p>
//                     <ul className="flex">
//                       {item.technologies.map((tech) => {
//                         return <li className="item">{tech}</li>;
//                       })}
//                     </ul>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

export default Projects;
