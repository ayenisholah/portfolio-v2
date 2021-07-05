import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import medium from "../assets/medium.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import Burger from "./Burger";
import { bool, func } from "prop-types";

export default function Header({ open, setOpen }) {
  return (
    <div className="Header">
      <Image
        className="logo"
        src={logo}
        alt="Shola Ayeni's Logo"
        height={96}
        width={96}
      />
      <nav className="nav-links" role="navigation">
        <a className="nav-link-item" href="#home">
          Home
        </a>
        <a className="nav-link-item" href="#about">
          About me
        </a>
        <a className="nav-link-item" href="/works">
          Works
        </a>
        <a className="nav-link-item" href="/blog">
          Blog
        </a>
        <a className="nav-link-item" href="/contact">
          Contact me
        </a>
      </nav>
      <div className="social-links desktop">
        <a
          className="social-link-item"
          href="https://www.linkedin.com/in/ayenishola/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="social-icons"
            src={medium}
            alt="medium icon"
            height={20}
            width={20}
          />
        </a>
        <a
          className="social-link-item"
          href="https://www.linkedin.com/in/ayenishola/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="social-icons"
            src={github}
            alt="github icon"
            height={20}
            width={20}
          />
        </a>
        <a
          className="social-link-item"
          href="https://www.linkedin.com/in/ayenishola/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="social-icons"
            src={linkedin}
            alt="linkedin icon"
            height={20}
            width={20}
          />
        </a>
      </div>
      <Burger open={open} setOpen={setOpen} />
    </div>
  );
}

Header.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
