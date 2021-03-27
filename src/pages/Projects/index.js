import React from "react";

import Muuri from "muuri";

import "./style.scss";

function Projects() {
  React.useEffect(() => {
    console.log(Muuri);

    var projectsGrid, artworksGrid, activitiesGrid;
    const lockDragOnPhone = (grid) => {
      if (window.innerWidth <= 600) {
        //Lock Project Drag Sort on Mobile
        grid.getItems().forEach((item) => {
          if (!item._drag) return;
          item._drag.destroy();
          item._drag = null;
        });
      } else {
        // Enable drag for all items.
        //Unlock Projects Drag Sort on Desktop
        grid.getItems().forEach((item) => {
          if (item._drag) return;
          item._drag = new Muuri.ItemDrag(item);
        });
      }
    };
    window.addEventListener("load", function (e) {
      projectsGrid = new Muuri(".projects-grid", {
        dragEnabled: true,
      });
      artworksGrid = new Muuri(".artworks-grid", {
        dragEnabled: true,
      });
      activitiesGrid = new Muuri(".activities-grid", {
        dragEnabled: true,
      });

      lockDragOnPhone(projectsGrid);
      lockDragOnPhone(artworksGrid);
      lockDragOnPhone(activitiesGrid);
      //Initiate Muuri when projects loaded
      projectsGrid._resizeHandler();
      //Initiate Muuri when artworks loaded
      artworksGrid._resizeHandler();
      //Initiate Muuri when activities loaded
      activitiesGrid._resizeHandler();
    });

    window.addEventListener("resize", () => {
      lockDragOnPhone(projectsGrid);
      lockDragOnPhone(artworksGrid);
      lockDragOnPhone(activitiesGrid);
    });

    //Filter projects
    document.querySelectorAll(".grid-filter-btns .filter").forEach((item) => {
      item.addEventListener("click", (e) => {
        document
          .querySelectorAll(".grid-filter-btns .filter")
          .forEach((item) => item.classNameList.remove("selected"));
        item.classNameList.add("selected");

        let filterFieldValue = item.getAttribute("project-type");
        projectsGrid.filter(function (item) {
          var element = item.getElement();
          var isFilterMatch = !filterFieldValue
            ? true
            : (element.getAttribute("project-type") || "") === filterFieldValue;
          return isFilterMatch;
        });
      });
    });
  }, []);

  return (
    <>
      {/* // <!-- Projects Section --> */}
      <section id="projects-section">
        <div className="section-heading-text projects-head">PROJECTS</div>
        <div className="grid-filter-btns container">
          <span className="filter selected" project-type="">
            All
          </span>
          <span className="filter" project-type="webdev">
            Web Dev
          </span>
          <span className="filter" project-type="uiux">
            UI/UX Design
          </span>
        </div>
        <div className="container">
          <div className="grid projects-grid">
            <div className="item" project-type="uiux">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/projects/MUSIC%20APP%20-%20DARK.png"
                      alt="Music App Design"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Music App Design</h4>
                      <p className="secondary-text">
                        This is a music app design made in figma and mockup
                        designed in photoshop.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item" project-type="uiux">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/projects/Mobile%20App%20Design.png"
                      alt="Chat App Design"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Chat App Design</h4>
                      <p className="secondary-text">
                        Designed a prototype for a messaging application named
                        "Chatr" using Adobe XD Software.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item" project-type="webdev">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/art/digitalart-DC.png"
                      alt="My Portrait"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">My Portrait</h4>
                      <p className="secondary-text">
                        Designed a prototype for a messaging application named
                        "Chatr" using Adobe XD Software.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item" project-type="webdev">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/projects/tindog.PNG"
                      alt="Tindog Web"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Tindog Web</h4>
                      <p className="secondary-text">
                        Designed a prototype for a messaging application named
                        "Chatr" using Adobe XD Software.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item" project-type="uiux">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/projects/colors-dc.PNG"
                      alt="Colors - Color Pallete for Designers!"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">
                        Colors - Color Pallete for Designers!
                      </h4>
                      <p className="secondary-text">
                        Designed a prototype for a messaging application named
                        "Chatr" using Adobe XD Software.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item" project-type="webdev">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/projects/Poler%20-%20create%20polls.PNG"
                      alt="Poler - Poll maker"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Poler - Poll maker</h4>
                      <p className="secondary-text">
                        Designed a prototype for a messaging application named
                        "Chatr" using Adobe XD Software.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Artworks Section --> */}
      <section id="artworks-section">
        <div className="container">
          <div className="section-heading-text artworks-head">ARTWORKS</div>
          <div className="grid artworks-grid">
            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/art/rashmika.png"
                      alt="Rashmika"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Rashmika</h4>
                      <p className="secondary-text">
                        <b>Actress:</b> Rashmika Mandanna <b>Tools:</b> Adobe
                        Illustrator + Photoshop
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/art/saloni.jpg"
                      alt="Saloni"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Saloni</h4>
                      <p className="secondary-text">
                        <b>Tools:</b> Adobe Illustrator + Photoshop
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/art/modelface.jpg"
                      alt="Model Face"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Model Face</h4>
                      <p className="secondary-text">
                        <b>Tools:</b> Adobe Illustrator + Photoshop
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/art/PRIYANKA%20FINAL.png"
                      alt="Priyanka"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Priyanka</h4>
                      <p className="secondary-text">
                        <b>Tools:</b> HB,2B,6B Pencils & Black ball pen
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/art/medicinalplants.jpg"
                      alt="Medicinal Plants"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Medicinal Plants</h4>
                      <p className="secondary-text">
                        Designed a prototype for a messaging application named
                        "Chatr" using Adobe XD Software.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/art/eyes2.jpg"
                      alt="Eyes"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Eyes</h4>
                      <p className="secondary-text">
                        Designed a prototype for a messaging application named
                        "Chatr" using Adobe XD Software.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Activities Section --> */}
      <section id="activities-section">
        <div className="container">
          <div className="section-heading-text artworks-head">ACTIVITIES</div>
          <div className="grid activities-grid">
            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/activities/line-follower1.JPG"
                      alt="Line Follower Robot"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Line Follower Robot</h4>
                      <p className="secondary-text">
                        Line follower is an autonomous robot which follows black
                        line. Robot must be able to detect particular line and
                        keep following it.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/activities/catapult.JPG"
                      alt="Catapult"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Catapult</h4>
                      <p className="secondary-text">
                        Secured first place. Catapult was tested in different
                        situations like shooting from varying distances and had
                        to aim at targets.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/activities/photography1.jpg"
                      alt="Photography"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Photography</h4>
                      <p className="secondary-text">
                        Secured first place in college level event called
                        Photology. We had to click photo inside the college
                        campus only.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/activities/bridge-building.jpg"
                      alt="Bridge Building"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">Bridge Building</h4>
                      <p className="secondary-text">
                        Got selected in top 3. We had to make Bridge using only
                        50 straws and a cello-tape. Weights were added and my
                        brige could handle 1.7kg weight.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="item-content">
                <div className="project">
                  <div className="project-image">
                    <img
                      src="https://devraj-chatribin.netlify.app/images/activities/car-lifting-machine.JPG"
                      alt="Portable Car Lifting Mechanism"
                      className="project-image-file"
                    />
                  </div>
                  <div className="project-info-overlay">
                    <div className="overlay-details">
                      <h4 className="project-name">
                        Portable Car Lifting Mechanism
                      </h4>
                      <p className="secondary-text">
                        Made a portable car lifting mechanism which can be used
                        to work on cars and also if a car is needed to move from
                        one place to another.
                      </p>
                      <a href="http://" className="gradient-text">
                        Open →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
