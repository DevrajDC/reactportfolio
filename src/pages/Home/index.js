import React from "react";
import "../../index.scss";
import "./style.scss";
import HomeIllustration from "../../assets/illustrations/Student Illustrator (1).svg";
import AboutIllustration from "../../assets/illustrations/about svg.svg";
import circle from "../../assets/svg/circle.svg";
import GirlscriptFoundation from "../../assets/Company logo/Girlscript Foundation.png";
import briefcase from "../../assets/svg/breifcase.svg";
import calender from "../../assets/svg/calender.svg";
import gssoc from "../../assets/Company logo/gssoc.png";
import GirlscriptGoa from "../../assets/Company logo/Girlscript.png";
import YayLogo from "../../assets/Company logo/YAY.png";
import PSLlogo from "../../assets/Company logo/PSL.png";
import StartUpGoa from "../../assets/Company logo/startup goa.png";
import WebDevGoa from "../../assets/Company logo/web dev goa.png";
import PCCEGoa from "../../assets/Company logo/pcce goa.png";
import MonitorIcon from "../../assets/svg/monitor.svg";
import DesigningIcon from "../../assets/svg/ux design.svg";
import GraphicDesignIcon from "../../assets/svg/graphic design.svg";
import WhatsappWebClone from "../../assets/projects/whatsapp-web.png";
import ColorsWebsite from "../../assets/projects/colors-website.png";
import VritikaImage from "../../assets/testimonials/author image.png";
import QuotesIcon from "../../assets/svg/double quotes.svg";

function index() {
  return (
    <>
      {/* ========================== Home Section ========================== */}
      <section id="home">
        <div class="hero container">
          <div class="hero-text">
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              Hi, I am <br />
              <span class="gradient-text">Devraj Chatribin</span>
            </h1>
            <p
              class="typewriter secondary-text"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              I am a <span class="gradient-text">Front-end Developer</span>
            </p>
            <p
              class="secondary-text"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="500"
            >
              Self-motivated, ambitious person with a creative, and adaptable
              nature. My aim is to apply my skills and knowledge in the
              betterment of the organization and to work collaboratively with
              others towards an objective of professional excellence.
            </p>
            <button
              class="resume secondary-text gradient-fill"
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="500"
            >
              Resume
            </button>
            <button
              class="contact secondary-text"
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="500"
            >
              Contact
            </button>
          </div>
          <div class="hero-image" data-aos="fade-left" data-aos-duration="500">
            <img src={HomeIllustration} alt="" />
          </div>
        </div>
      </section>

      {/* =======================  About Section  ======================= */}
      <section id="about">
        <h1
          class="section-heading-text"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          Who am i?
        </h1>
        <div class="about container">
          <div
            class="about-image"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <img src={AboutIllustration} alt="" />
          </div>
          <div class="about-text">
            <p
              class="secondary-text"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              I am a
              <span class="gradient-text">Computer Engineering Student</span>{" "}
              who is passionate about
              <span class="gradient-text">Development</span> and
              <span class="gradient-text">Designing.</span> I am currently
              working with several communties by organizing programs/events and
              making websites and designs. My hobbies are Art and Photography. I
              also like to write tech and coding related Blogs. My main skillset
              includes
              <span class="gradient-text">
                Front-end Development, UI/UX Designing and Graphic Designing.
              </span>
            </p>
            <p
              class="secondary-text"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              I am a Computer Engineering Student who is passionate about
              development and designing. I am currently working with several
              communties by organizing programs/events and making websites and
              designs. My hobbies are Art and Photography. I also like to write
              tech and coding related Blogs. My main skillset includes Front-end
              Development, UI/UX Designing and Graphic Designing.
            </p>
          </div>
        </div>
      </section>

      {/*  ============================= Experience Section =============================  */}
      <section id="experience">
        <h1
          class="section-heading-text"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          Journey So Far
        </h1>
        {/* Work Experience  */}
        <div class="container">
          <div class="experience-heading">
            <div
              class="timeline"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              <img src={circle} alt="" />
              <div class="line"></div>
            </div>
            <p
              class="primary-text gradient-text"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              WORK EXPERIENCE
            </p>
          </div>
          <div class="work-experience">
            <div class="experience">
              <div
                class="timeline"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <img src={GirlscriptFoundation} alt="" />
                <div class="line"></div>
              </div>
              <div
                class="details"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  Graphic Designer
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <img src={briefcase} alt="" />
                  Girlscript Foundation
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <img src={calender} alt="" />
                  Jan 2021 - Present | 1 mos
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Designing Posters for GirlScript Education Outreach socials
                  and Organizing the scholarship event.
                </p>
              </div>
            </div>
            <div class="experience">
              <div
                class="timeline"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <img src={gssoc} alt="" />
                <div class="line"></div>
              </div>
              <div
                class="details"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  Web Developer & Graphic Designer
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <img src={briefcase} alt="" />
                  Girlscript Summer of Code
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <img src={calender} alt="" />
                  Jan 2021 - Present | 1 mos
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Designing and Developing GirlScript Summer of Code Official
                  website and Designed posters for social media and all
                  graphics.
                </p>
              </div>
            </div>
            <div class="experience">
              <div
                class="timeline"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <img src={GirlscriptGoa} alt="" />
                <div class="line"></div>
              </div>
              <div
                class="details"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  Web Developer
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <img src={briefcase} alt="" />
                  Girlscript Goa
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <img src={calender} alt="" />
                  Aug 2020 - Present | 7 mos
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Working with the core team of Girlscript Goa as a Web
                  Developer. Developing official website of Girlscript Goa and
                  updating it.
                </p>
              </div>
            </div>
            <div class="experience">
              <div
                class="timeline"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <img src={GirlscriptGoa} alt="" />
                <div class="line"></div>
              </div>
              <div
                class="details"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  Graphic Designer
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <img src={briefcase} alt="" />
                  Girlscript Goa
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <img src={calender} alt="" />
                  Sep 2020 - Sep 2020 | 1 mos
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Event Organizer, Designed event ticket, registration poster,
                  event schedule poster, poster for speakers of the event, event
                  winners poster,Girlscript Goa's Team Poster.
                </p>
              </div>
            </div>
            <div class="experience">
              <div
                class="timeline"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <img src={YayLogo} alt="" />
                <div class="line"></div>
              </div>
              <div
                class="details"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  Campus Ambassador
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <img src={briefcase} alt="" />
                  YAY! - Celebrating Education
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <img src={calender} alt="" />
                  Sep 2020 - Oct 2020 | 2 mos
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  YAY is live online learning platform. More than just an online
                  learning platform with course recordings and certificates!
                </p>
              </div>
            </div>
            <div class="experience">
              <div
                class="timeline"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <img src={PSLlogo} alt="" />
                <div class="line"></div>
              </div>
              <div
                class="details"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  PSL Intern
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <img src={briefcase} alt="" />
                  Persistent Systems Ltd.
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <img src={calender} alt="" />
                  Sep 2020 - Oct 2020 | 1 mos
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Project: Pneumonia Classification using Chest X-Ray images.
                  Working on problem statements in the areas of "federated
                  learning and differential privacy".
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* Volunteering Experience  */}
        <div class="container">
          <div class="experience-heading">
            <div
              class="timeline"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              <img src={circle} alt="" />
              <div class="line"></div>
            </div>
            <p
              class="primary-text gradient-text"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              VOLUNTEER EXPERIENCE
            </p>
          </div>
          <div class="work-experience">
            <div class="experience">
              <div
                class="timeline"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <img src={StartUpGoa} alt="" />
                <div class="line"></div>
              </div>
              <div
                class="details"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  User Interface Designer
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <img src={briefcase} alt="" />
                  Startup Goa
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <img src={calender} alt="" />
                  Nov 2020 - Nov 2020 | 1 mos
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Designed Landing page of Startup Goa's official website.
                  Startup Goa is a community that helps students through
                  meetups, workshops, blog and job board.
                </p>
              </div>
            </div>
            <div class="experience">
              <div
                class="timeline"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <img src={WebDevGoa} alt="" />
                <div class="line"></div>
              </div>
              <div
                class="details"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  Project Lead / Mentor
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <img src={briefcase} alt="" />
                  Web Dev Goa
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <img src={calender} alt="" />
                  Nov 2020 - Present | 3 mos
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Teaching students the whole process of developing websites
                  including designing, development and open sourcing the project
                  using git and github.
                </p>
              </div>
            </div>
            <div class="experience">
              <div
                class="timeline"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <img src={PCCEGoa} alt="" />
                <div class="line"></div>
              </div>
              <div
                class="details"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  Event Coordinator - CodeCrunch
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <img src={briefcase} alt="" />
                  Padre Conceicao College of Engineering
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <img src={calender} alt="" />
                  Nov 2020 - Nov 2020 | 1 mos
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Des- Designed Event Posters and Graphics. Techyon 2020 is
                  Annual Tech event held by PCCE, Goa. Techyon has many Tech
                  events including Inter College and Intra College Competitions
                  and Workshops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  =========================== Services Section ===========================  */}
      {/* <div id="services" class="services-section">
        <h1
          class="section-heading-text"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          SERVICES
        </h1>
        <div class="container owl-carousel owl-theme">
          <div
            class="webdev services item"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            <img src={MonitorIcon} alt="" />
            <p
              class="primary-text"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              WEB <br />
              DEVELOPMENT
            </p>
            <p
              class="secondary-text"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="500"
            >
              I develop responsive websites with mordern design interactions and
              animations. I make fully responsive, functional and dynamic
              websites keeping in mind the best user experience.
            </p>
          </div>
          <div
            class="uiuxdesign services item"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <img src={DesigningIcon} alt="" />
            <p
              class="primary-text"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="500"
            >
              UI/UX <br />
              DESIGNING
            </p>
            <p
              class="secondary-text"
              data-aos="fade-left"
              data-aos-delay="700"
              data-aos-duration="500"
            >
              I design modern and beautiful websites. Any business today needs a
              website that wins customers’ trust and helps you do your business
              well. I make sure your website is up to that standard.
            </p>
          </div>
          <div
            class="graphicdesign services item"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            <img src={GraphicDesignIcon} alt="" />
            <p
              class="primary-text"
              data-aos="fade-left"
              data-aos-delay="700"
              data-aos-duration="500"
            >
              GRAPHIC <br />
              DESIGNING
            </p>
            <p
              class="secondary-text"
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="500"
            >
              I design beautiful posters and graphics for web and social medias.
              Good graphics always tend to grab peoples attention and will get
              more benefits to your business as well. I will make sure i make
              such designs for you!
            </p>
          </div>
        </div>
      </div> */}

      {/*  ======================== Projects Section ========================  */}
      <section id="projects">
        <h1
          class="section-heading-text"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          CREATIVE WORK
        </h1>
        <div class="container">
          <div class="project">
            <div class="project-text">
              <p
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="500"
                class="secondary-text"
              >
                Latest Work
              </p>
              <p
                class="primary-text"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                RESPONSIVE WHATSAPP WEB CLONE
              </p>
              <div class="tags">
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  JAVASCRIPT
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  WEB DEVELOPMENT
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  WEB DESIGN
                </p>
              </div>
              <p
                class="secondary-text"
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="500"
              >
                - multiple devices support. <br />
                - One to One chat app. <br />
                - Responsive on all devices. <br />- Google Authorization.
              </p>
              <button
                class="gradient-fill"
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="500"
              >
                Open Project
              </button>
            </div>
            <div
              class="project-image"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              <img src={WhatsappWebClone} alt="" />
            </div>
          </div>
          <div class="project">
            <div class="project-text">
              <p
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="500"
                class="secondary-text"
              >
                Latest Work
              </p>
              <p
                class="primary-text"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                COLORS - Color Palettes for Designers
              </p>
              <div class="tags">
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  JAVASCRIPT
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  WEB DEVELOPMENT
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  WEB DESIGN
                </p>
              </div>
              <p
                class="secondary-text"
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="500"
              >
                We provide Color Palette & Gradients for Designers. <br />
                - Thousands of color palettes. <br />
                - Many Color Gradients available. <br />
                - Create your own custom palette. <br />- Theme Generator.
              </p>
              <button
                class="gradient-fill"
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="500"
              >
                Open Project
              </button>
            </div>
            <div
              class="project-image"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              <img src={ColorsWebsite} alt="" />
            </div>
          </div>
        </div>
        <div class="more-projects">
          <p
            class="secondary-text"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            Check out all my Projects and Work here.
          </p>
          <a href="./projects/">
            <button
              class="secondary-text"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="500"
            >
              View All Projects
            </button>
          </a>
        </div>
      </section>

      {/*  ============================ Testimonials Section ============================  */}
      <section id="testimonials">
        <h1
          class="section-heading-text"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          what others say
        </h1>
        <div class="testimonials container">
          <div class="testimonial">
            <div
              class="testimonial-image"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="500"
            >
              <img src={VritikaImage} alt="" />
            </div>
            <div class="testimonial-text">
              <img
                src={QuotesIcon}
                alt="quotes"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              />
              <p
                class="secondary-text"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="500"
              >
                I am amazed at Devraj's ability to create intriguing designs. At
                GirlScript, Devraj not only worked with graphic designing but
                also designed the UI and contributed to the front end of the
                website. His work ethics are immaculate. His deliveries were
                always very well executed before time. His energy to make things
                happen is contagious and it helps achieve great goals. It is
                always a pleasure working with Devraj and I am confident that he
                will be an asset to any team that he is a part of.
              </p>
              <div class="author-description">
                <p
                  class="author-name"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  Vritika Naik
                </p>
                <p
                  class="secondary-text"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  GHCI '20 Scholar | Regional Head @GirlScript | #IamRemarkable
                  | Software Engineer | Content Writer | Digital Storyteller
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
