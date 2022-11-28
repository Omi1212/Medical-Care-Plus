import React, { useState, useEffect } from "react";
import classes from "./HeaderDashboard.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { Link as SmoothScroll, animateScroll as scroll } from "react-scroll";
import Logo from "../../../../assets/img/Logo-mcp.png";

function Header(userName) {
  const navigate = useNavigate();

  const [showResults, setShowResults] = useState(false);
  const show = () => setShowResults(true);
  const hidden = () => setShowResults(false);

  const [user, setUser] = useState({});
  useEffect(() => {
    const retrievedObject = JSON.parse(localStorage.getItem('user'));
    setUser(retrievedObject);
  }, []);

  const manageLogOut = () =>{
    localStorage.clear()
    navigate("/");
  }

  const Results = () => (
    <div id="results" className="search-results">
      <div className={classes["menu"]}>
        <div className={classes["close-menu"]}>
          <a onClick={hidden}>
            <i className="fi fi-rr-cross"></i>
          </a>
        </div>
        <div className={classes["menu-content"]}>
          <Link to="/">
            <a>Home</a>
          </Link>

          <SmoothScroll
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#services">Services</a>
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

          <a>Sign in</a>
          <a>Sign up</a>
        </div>
      </div>
    </div>
  );

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <nav className={classes["navBar"]}>
        <a href="">Home</a>
        <SmoothScroll
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a href="#services">Services</a>
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
      </nav>
      <div className={classes["hamburguer-button"]}>
        <a onClick={show}>
          <i className="fi fi-rr-menu-burger"></i>
        </a>
      </div>
      {showResults ? <Results /> : null}
      <div className={classes["container-logo"]}>
        <img
          onClick={scrollToTop}
          src={Logo}
          width="200px"
          alt=""
        />
      </div>
      <div className={classes["button-component"]}>
        <label>{user.name}</label>
        <button onClick={manageLogOut}>Log out</button>
      </div>
    </header>
  );
}

export default Header;
