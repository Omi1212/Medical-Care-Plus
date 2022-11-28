import React from "react";
import classes from "./Footer.module.scss";
import { Link as SmoothScroll, animateScroll as scroll } from "react-scroll";

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer>
      <div className={classes["content-footer"]}>
        <div className={classes["btn-top"]}>
          <a onClick={scrollToTop}>
            <i className="fi fi-rr-angle-small-up"></i>
          </a>
        </div>
        <div className={classes["btn-links"]}>
          <a href="">Home</a>
          <SmoothScroll
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#services">About</a>
          </SmoothScroll>
          
          <SmoothScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#about">About</a>
          </SmoothScroll>
        </div>
      </div>
      <p>&copy; 2022 All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
