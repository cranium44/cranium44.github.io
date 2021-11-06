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
		<div className='row footer'>
			<div className='col-md-12 text-center'>
				<div className='sm-list'>
					<a
						href={contactDetails.facebook}
						target='_blank'
						rel='noreferrer'
					>
						<Facebook className='icons' color='white' size={30} />
					</a>
					<a
						href={contactDetails.facebook}
						target='_blank'
						rel='noreferrer'
					>
						<Twitter className='icons' color='white' size={30} />
					</a>
					<a
						href={contactDetails.facebook}
						target='_blank'
						rel='noreferrer'
					>
						<Linkedin className='icons' color='white' size={30} />
					</a>
					<a
						href={contactDetails.facebook}
						target='_blank'
						rel='noreferrer'
					>
						<Instagram className='icons' color='white' size={30} />
					</a>
					<a
						href={contactDetails.facebook}
						target='_blank'
						rel='noreferrer'
					>
						<GitHub className='icons' color='white' size={30} />
					</a>
				</div>
			</div>
		</div>
	);
};
export default Footer;
