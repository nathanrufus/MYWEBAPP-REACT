import React from "react";
import "./Intro.css";
import bg from "../Assets/image.png";
import btn from "../Assets/hireme.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Kibet</span>
          <br /> Website Designer
        </span>
        <p className="intropara">
          I'm a skilled web designer with experiencenin creating <br />
          visually appealing and user friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src={btn} alt="Hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
}

export default Intro;
