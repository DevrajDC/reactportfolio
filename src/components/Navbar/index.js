import React from "react";
import "../../index.scss";
import "./style.scss";

function Navbar() {
  return (
    <>
      <nav>
        <div class="nav-container">
          <div class="logo">
            <a class="gradient-text" href="#">
              Devraj Chatribin.
            </a>
          </div>
          <div class="nav-cover"></div>
          <ul class="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/blogs/">Blogs</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>
      </nav>
      <div class="nav-overlay"></div>
    </>
  );
}

export default Navbar;
