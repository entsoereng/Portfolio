import React from "react";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <div className="portfolio-parent">
        <div className="portfolio">Portfolio</div>
        <div className="home-parent">
          <a className="home">Home</a>
          <a className="about">About</a>
          <a className="services">Services</a>
          <div className="portfolio1">Portfolio</div>
          <div className="contacts">Contacts</div>
        </div>
      </div>
      <div className="about-section">
        <div className="profil-pic2">
          <div className="profil-pic2-child" />
          <img
            className="mk1-removebg-preview-2-icon"
            alt=""
            src="/mk1removebgpreview-2@2x.png"
          />
        </div>
        <div className="about-me">
          <span>{`About `}</span>
          <span className="me">Me</span>
        </div>
        <div className="fronted-developer">Fronted Developer</div>
        <div className="hello-im">
          Hello! 👋 I'm Mokonyana Ntsoereng, a passionate software engineering
          student at Holberton School Lesotho, with a keen interest in web
          development. Welcome to my portfolio.
        </div>
        <button className="button-see1">
          <div className="button-see1-child" />
          <b className="see-more">See more</b>
        </button>
      </div>
      <div className="my-services">
        <div className="my-services1">
          <span>{`My `}</span>
          <span className="me">Services</span>
        </div>
        <div className="my-services-child" />
        <div className="my-services-item" />
        <div className="my-services-inner" />
        <div className="digit-parent">
          <img className="digit-icon" alt="" src="/digit@2x.png" />
          <img className="pen-icon" alt="" src="/pen@2x.png" />
          <img className="iconreact" alt="" src="/iconreact@2x.png" />
          <button className="button-see4">
            <div className="button-see4-child" />
            <b className="see-more">See more</b>
          </button>
          <button className="button-see2">
            <div className="button-see2-child" />
            <b className="see-more">See more</b>
          </button>
          <button className="button-see3">
            <div className="button-see3-child" />
            <b className="see-more">See more</b>
          </button>
          <b className="uiux-designe">UI/UX Designe</b>
          <b className="web-development">Web Development</b>
          <b className="digital-marketing">Digital Marketing</b>
          <div className="hello-im1">
            Hello! 👋 I'm Mokonyana Ntsoereng, a passionate software engineering
            student at Holberton School Lesotho, with a keen interest in web
            development. Welcome to my portfolio.
          </div>
          <div className="hello-im2">
            Hello! 👋 I'm Mokonyana Ntsoereng, a passionate software engineering
            student at Holberton School Lesotho, with a keen interest in web
            development. Welcome to my portfolio.
          </div>
          <div className="hello-im3">
            Hello! 👋 I'm Mokonyana Ntsoereng, a passionate software engineering
            student at Holberton School Lesotho, with a keen interest in web
            development. Welcome to my portfolio.
          </div>
        </div>
      </div>
      <div className="my-projects">
        <b className="my-projects1">
          <span>My</span>
          <span className="span">{` `}</span>
          <span className="projects">Projects</span>
        </b>
        <div className="rectangle-parent">
          <div className="group-child" />
          <img className="vmal-1-icon" alt="" src="/vmal-1@2x.png" />
          <div className="group-item" />
          <div className="group-inner" />
          <img className="music-1-icon" alt="" src="/music-1@2x.png" />
          <div className="v-mol">V-Mol</div>
          <div className="media-lab">Media Lab</div>
          <div className="sark-music">Sark Music</div>
          <img className="medialab-1-icon" alt="" src="/medialab-1@2x.png" />
        </div>
      </div>
      <div className="contact-me">
        <div className="contact-me1">
          <span>{`Contact `}</span>
          <span className="projects">Me</span>
        </div>
        <button className="button-submit">
          <div className="button-submit-child" />
          <b className="submit">Submit</b>
        </button>
        <input
          className="first-name"
          value="First Name"
          placeholder="First Name"
          type="text"
        />
        <input className="last-name" placeholder="Last Name" type="text" />
        <input
          className="email-address"
          placeholder="Email Address"
          type="text"
        />
        <input
          className="your-message"
          placeholder="Your Message"
          type="text"
        />
        <input className="mobile" placeholder="Mobile" type="text" />
      </div>
      <div className="home1">
        <div className="hello-its-me">Hello its me!</div>
        <div className="mokonyana-ntsoereng">Mokonyana Ntsoereng</div>
        <div className="i-am-a">I am a</div>
        <div className="frontend-developer">Frontend Developer</div>
        <div className="hello-im-container">
          <p className="at-holberton-school">{`Hello! 👋 I'm Mokonyana Ntsoereng, a passionate software engineering student `}</p>
          <p className="at-holberton-school">{`at Holberton School Lesotho, with a keen interest in web development. Welcome `}</p>
          <p className="at-holberton-school">to my portfolio.</p>
        </div>
        <div className="linkedin-1-parent">
          <img className="linkedin-1-icon" alt="" src="/linkedin-1@2x.png" />
          <img className="instagram-1-icon" alt="" src="/instagram-1@2x.png" />
          <img className="facebook-1-icon" alt="" src="/facebook-1@2x.png" />
          <img className="x1-1-icon" alt="" src="/x1-1@2x.png" />
        </div>
        <button className="cv-button">
          <b className="download-cv">Download CV</b>
        </button>
        <img className="profile-pic-icon" alt="" src="/profile-pic@2x.png" />
      </div>
    </div>
  );
};

export default Desktop;
