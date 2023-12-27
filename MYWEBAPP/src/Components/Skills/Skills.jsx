import React from "react";
import "./Skills.css";
import UIDesign from "../Assets/ui-design.png";
import MeDesign from "../Assets/website-design.png";
import AppDesign from "../Assets/app-design.png";

function Skills() {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">
          I am a skilled and passionate web designer with experience in HTML
          ,CSS and Javascript as weel as design software such as Adobe Photoshop
          and Illustrator
        </span>
        <div className="skillsBars">
          <div className="skillbar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>Thgis is a demo text,you can write your own content here</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={MeDesign} alt="MeDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Website Design</h2>
              <p>
                This demo text can be changed while making the production ready
                website.
              </p>
            </div>
          </div>
          <div className="skillbar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>You can write text related to mobile app development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
