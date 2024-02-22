import React from "react";
import profile from "../../assets/javier.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaMailchimp,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {


  


  const role = "admin"


  return (
    <div className="hero-container">
      <div className="leftBox">
        <h1>
          Hello, I'm <span>Javier</span> 👋{" "}
        </h1>
        <p>
          A passionate Software Engineer 🚀 having an experience of building Web
          and Mobile applications with JavaScript / Reactjs / Nodejs / React
          Native and some other cool libraries and frameworks.
        </p>

        <div className="icons-list">
          <FaFacebook size={36} style={{ color: "#3B5998" }} className="icon" />
          <FaInstagram size={36} style={{ color: "pink" }} className="icon" />
          <FaTwitter size={36} style={{ color: "#3B5998" }} className="icon" />
          <FaGithub size={36} style={{ color: "black" }} className="icon" />
          <FaMailchimp
            size={36}
            style={{ color: "#3B5998" }}
            className="icon"
          />
          {/* 
          1. Do it by adding pictures
          2. We can do it by installing a library , and adding icons
            1. font -awesom

            3. antd-icons
            4. mui - icons


                        2. react-icons | pacakage (deal)


          Convert('1st month', '2nd month') 
          */}
        </div>
        <div className="buttons">
          <button>Contact Me </button>
          <button>See my Resume</button>
        </div>
      </div>
      <div className="rightBox">
        <img src={profile} alt="My Picture" />
        
          {
            role === 'admin' ? <button>Delete</button>: <button>Change Picture</button>
          }

          
           { role === 'user' && <button>Change Name</button> }
          

      </div>
    </div>
  );
};

export default Hero;
