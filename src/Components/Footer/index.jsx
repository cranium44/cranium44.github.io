import React from "react";
import { Twitter } from "react-feather";
import { Linkedin } from "react-feather";
import { Instagram } from "react-feather";
import { Facebook } from "react-feather";
import { GitHub } from "react-feather";
import { contactDetails } from "../../data";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="row footer">
      <div className="col-md-12 text-center">
        <div className="sm-list">
          <a href={contactDetails.facebook}>
            <Facebook className="icons" color="white" size={30} />
          </a>
          <a href={contactDetails.twitter}>
            <Twitter className="icons" color="white" size={30} />
          </a>
          <a href={contactDetails.linkedin}>
            <Linkedin className="icons" color="white" size={30} />
          </a>
          <a href={contactDetails.instagram}>
            <Instagram className="icons" color="white" size={30} />
          </a>
          <a href={contactDetails.github}>
            <GitHub className="icons" color="white" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
