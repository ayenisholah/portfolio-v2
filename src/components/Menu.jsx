import React from "react";
import Image from "next/image";
import medium from "../assets/medium.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { bool } from "prop-types";

export default function Menu({ open }) {
  return (
    <nav
      className={open ? "Mobile_navigation open" : "Mobile_navigation close"}
      role="navigation"
    >
      <a href="#home">Home</a>
      <a href="#about">About me</a>
      <a href="/works">Works</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact me</a>
      <div className="social-links mobile">
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
    </nav>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};
