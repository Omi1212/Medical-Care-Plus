import React from "react";
import classes from "./Body.module.scss";
import imagePrincipal from "../../../assets/img/work-home-img.jpg";
import imageSecondary from "../../../assets/img/istockphoto-1173258771-612x612.jpg";

function Body() {
  return (
    <body>
      <section className={classes["first-section"]}>
        <div className={classes["left-container"]}>
          <div className={classes["content-title"]}>
            <h1>You forgot it? don't worry</h1>
          </div>
          <p>
            We take care of reminding you of the most important thing, your
            health. Write down your medical appointments, your prescriptions and
            set a reminder to have them anytime, anywhere.
          </p>
          <button>Get Started</button>
        </div>
        <div className={classes["right-container"]}>
          <figure>
            <img src={imagePrincipal} alt="Image container" />
          </figure>
        </div>
      </section>

      <section className={classes["second-section"]} id="services">
        <div className={classes["content-title"]}>
          <h1>Some of our features</h1>
        </div>
        <div className={classes["content-cards"]}>
          <div className={classes["cards"]}>
            <div className={classes["oval"]}>
              <i className="fi fi-rr-alarm-clock"></i>
            </div>
            <h3>Reminders</h3>
            <p>
              Create your own reminders so you don't forget medical
              appointments, you can also add a person in charge
            </p>
          </div>
          <div className={classes["cards"]}>
            <div className={classes["oval"]}>
              <i className="fi fi-rr-calendar-clock"></i>
            </div>
            <h3>Calendar</h3>
            <p>
              Through the calendar you can access your reminders and check what
              day you have free to assign others
            </p>
          </div>
          <div className={classes["cards"]}>
            <div className={classes["oval"]}>
              <i className="fi fi-rr-pencil"></i>
            </div>
            <h3>To do list</h3>
            <p>
              Create a list of your prescription to remind you what time you
              should take your medication or make an appointment
            </p>
          </div>
        </div>
      </section>

      <section className={classes["third-section"]}>
        <div className={classes["container-img"]}>
          <figure>
            <img
              src={imageSecondary}
              alt=""
            />
          </figure>
        </div>
        <div className={classes["container-text"]}>
          <span>MEDICAL CARE PLUS</span>
          <div className={classes["content-title"]}>
            <h1>We tell you a little about us</h1>
          </div>
          <p>
            We are a group of programmers who think that the most important
            thing is your health. We know how important it is to attend your
            medical check-up or also to take your medications at the right time,
            through our services you can forget about any worries, we will do it
            for you.
          </p>
        </div>
      </section>

      <section className={classes["four-section"]} id="about">
        <span>AWESOME CREW</span>
        <div className={classes["content-title"]}>
          <h1>Meet Our Teammates</h1>
        </div>
        <div className={classes["content-card-team"]}>
          <div className={classes["cards-team"]}>
            <div className={classes["oval"]}>
              <i className="fi fi-rr-user"></i>
            </div>
            <h3>Oscar Cruz</h3>
            <p>Frontend</p>
          </div>
          <div className={classes["cards-team"]}>
            <div className={classes["oval"]}>
              <i className="fi fi-rr-user"></i>
            </div>
            <h3>Diego Lara</h3>
            <p>Backend</p>
          </div>
          <div className={classes["cards-team"]}>
            <div className={classes["oval"]}>
              <i className="fi fi-rr-user"></i>
            </div>
            <h3>Omar Leiva</h3>
            <p>Dabatase</p>
          </div>
        </div>
      </section>

      <section className={classes["five-section"]}>
        <div className={classes["content-title"]}>
          <h1>What are you waiting for?</h1>
        </div>
        <div className={classes["btn-started"]}>
          <a>
            Get Started <i className="fi fi-rr-angle-small-right"></i>
          </a>
        </div>
      </section>
    </body>
  );
}

export default Body;
