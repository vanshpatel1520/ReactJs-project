import React from "react";

const About = () => {
  return (
    <>
      <section class="about_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 px-0">
              <div class="img_container">
                <div class="img-box">
                  <img src="images/about-img.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 px-0">
              <div class="detail-box">
                <div class="heading_container">
                  <h2>Who Are We?</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="btn-box">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
