import React from "react";
import "../../index.scss";
import "./style.scss";
import mail from "../../assets/social icons/mail.svg";
import linkedin from "../../assets/social icons/linkedin.svg";
import github from "../../assets/social icons/github.svg";
import instagram from "../../assets/social icons/instagram.svg";
import behance from "../../assets/social icons/behance.svg";
import devto from "../../assets/social icons/devto.svg";
import footerillustration from "../../assets/illustrations/footer illustration.svg";

function Footer() {
  return (
    <footer>
      <section id="contact">
        <h1
          class="section-heading-text"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          CONNECT WITH ME
        </h1>
        <div class="container">
          <div class="left">
            <div class="send-mail">
              <h1
                class="primary-text"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                Hi, Got a project? <br />
                <span>Let's Talk.</span>
              </h1>
              <p
                class="secondary-text"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                Send me a mail and let's discuss further about your project.
              </p>
              <button
                class="gradient-fill"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="500"
              >
                Send Mail
              </button>
              <button
                data-aos="fade-left"
                data-aos-delay="700"
                data-aos-duration="500"
              >
                Whatsapp Me
              </button>
            </div>
            <p
              class="primary-text"
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="500"
            >
              Or
            </p>
            <div class="social-links">
              <h1
                class="primary-text"
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="500"
              >
                Contact me through other media
              </h1>
              <div class="socials">
                <div
                  class="icon"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                >
                  <img src={mail} alt="Mail" />
                </div>
                <div
                  class="icon"
                  data-aos="fade-left"
                  data-aos-delay="1100"
                  data-aos-duration="500"
                >
                  <img src={linkedin} alt="linkedin" />
                </div>
                <div
                  class="icon"
                  data-aos="fade-left"
                  data-aos-delay="1200"
                  data-aos-duration="500"
                >
                  <img src={github} alt="github" />
                </div>
                <div
                  class="icon"
                  data-aos="fade-left"
                  data-aos-delay="1300"
                  data-aos-duration="500"
                >
                  <img src={instagram} alt="instagram" />
                </div>
                <div
                  class="icon"
                  data-aos="fade-left"
                  data-aos-delay="1400"
                  data-aos-duration="500"
                >
                  <img src={behance} alt="behance" />
                </div>
                <div
                  class="icon"
                  data-aos="fade-left"
                  data-aos-delay="1500"
                  data-aos-duration="500"
                >
                  <img src={devto} alt="devto" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="right"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            <img src={footerillustration} alt="" />
          </div>
        </div>

        <div class="footer-text">
          <hr class="container" />
          <div class="container">
            <p
              class="secondary-text"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              &copy; 2020 | Devraj
            </p>
            <p
              class="secondary-text"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              Site by <span class="gradient-text">Devraj Chatribin.</span>
            </p>
            <p
              class="secondary-text"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
