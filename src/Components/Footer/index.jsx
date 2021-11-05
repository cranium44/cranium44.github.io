import React from "react";
import { GitHub, Twitter } from "react-feather";
import { Linkedin } from "react-feather";
import { Instagram } from "react-feather";
import { Facebook } from "react-feather";
import { contactDetails } from "../../data";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="row footer">
      <div className="col-md-12 text-center">
        <div className="sm-list">
          <a
            href={contactDetails.facebook}
            target="_blank"
            rel="noreferrer"
            className="footer__socials"
          >
            <Facebook className="icons" />
          </a>
          <a
            href={contactDetails.twitter}
            target="_blank"
            rel="noreferrer"
            className="footer__socials"
          >
            <Twitter className="icons" />
          </a>
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer__socials"
          >
            <Linkedin className="icons" />
          </a>
          <a
            href={contactDetails.instagram}
            target="_blank"
            rel="noreferrer"
            className="footer__socials"
          >
            <Instagram className="icons" />
          </a>
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noreferrer"
            className="footer__socials"
          >
            <GitHub className="icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
