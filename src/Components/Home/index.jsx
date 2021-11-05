import React from "react";
import ActionButton2 from "../ActionButton2/actionButton2.component";
import "./home.styles.scss";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="home">
      <div className=" row rrow">
        <div className="col-sm-8 column">
          <div className="left-text">
            <h2 className="main-text">Hi, My name is Adabe</h2>
            <div className="sub-text">I am a Software Engineer</div>
            <div className="sub-text">blah blah blah...</div>
            <div className="action-buttons">
              {/* <div className='learn-more'>
                                <ActionButton>My Skills</ActionButton>
                            </div> */}
              <div className="hire-gig">
                <ActionButton2>Hire me</ActionButton2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 right-text">
            <img src="/logo512.png" alt=""/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
