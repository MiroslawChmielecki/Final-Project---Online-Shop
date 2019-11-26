import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => (
  <div className="contactPage container">
    <h1 className="contactPage-header">Kontakt:</h1>
    <p className="contactPage-email">
      <span>E-mail:</span> <FontAwesomeIcon icon={faEnvelope} />{" "}
      <span>MiroShopSport@sport.com.pl</span>
    </p>
    <p className="contactPage-phone">
      Tel: <FontAwesomeIcon icon={faMobileAlt} />
      +48 308940285
    </p>
    <h5 className="contactPage-socialMediaHeader">
      Odwiedź nas w mediach społecznościowych
    </h5>

    <div className="contactPage-SocialMediaIcons ">
      <div className="contactPage-SocialMedia-instagram mediaIcon">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
      <div className="contactPage-SocialMedia-twitter mediaIcon">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </div>
      <div className="contact-social-media-linkedin mediaIcon">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
      <div className="contactPage-SocialMedia-facebook mediaIcon">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </div>
      <div className="contactPage-SocialMedia-youtube mediaIcon">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </div>
    </div>
  </div>
);

export default ContactPage;
