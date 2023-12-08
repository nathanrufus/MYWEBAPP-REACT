import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import contactimg from "../Assets/contact.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopmenu">
        <Link className="desktopMenulistItem">Home</Link>
        <Link className="desktopMenulistItem">Clients</Link>
        <Link className="desktopMenulistItem">About</Link>
        <Link className="desktopMenulistItem">Portfolio</Link>
      </div>
      <button className="desktopmenuBtn">
        <img src={contactimg} alt="" className="desktopmenuImg" />
        Contact ame
      </button>
    </nav>
  );
}

export default Navbar;
