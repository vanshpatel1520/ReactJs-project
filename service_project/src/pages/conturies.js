import React from "react";

function Countries() {
  return (
    <>
      <div className="hero_bg_box">
        <div className="img-box">
          <img src="images/hero-bg.jpg" alt="" />
        </div>
      </div>

      <section className="country_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Choose Country</h2>
            <p>Select country you want to apply visa for</p>
          </div>
          <div className="row">
            {/* Repeat for each country */}
            <div className="col-md-4">
              <a href="#" className="box">
                <img src="images/c1.jpg" alt="France" />
                <div className="detail-box">
                  <h3>France</h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="box">
                <img src="images/c2.jpg" alt="Canada" />
                <div className="detail-box">
                  <h3>Canada</h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="box">
                <img src="images/c3.jpg" alt="United States" />
                <div className="detail-box">
                  <h3>United States</h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="box">
                <img src="images/c4.jpg" alt="New Zealand" />
                <div className="detail-box">
                  <h3>New Zealand</h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="box">
                <img src="images/c5.jpg" alt="Australia" />
                <div className="detail-box">
                  <h3>Australia</h3>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="box">
                <img src="images/c6.jpg" alt="Spain" />
                <div className="detail-box">
                  <h3>Spain</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 info_logo">
              <a className="navbar-brand" href="index.html">
                <span>Viseas</span>
              </a>
              <p>
                Dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                veniam, quisdotempor incididunt r
              </p>
            </div>
            <div className="col-md-3 info_links">
              <h5>Useful Link</h5>
              <ul>
                <li>
                  <a href="#">Dolor sit amet, consectetur</a>
                </li>
                <li>
                  <a href="#">Magna aliqua. Ut enim ad</a>
                </li>
                <li>
                  <a href="#">Minim veniam</a>
                </li>
                <li>
                  <a href="#">Quisdotempor incididunt r</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 info_info">
              <h5>Contact Us</h5>
              <div className="info_contact">
                <a href="#">
                  <i className="fa fa-map-marker"></i>
                  <span>Lorem ipsum dolor sit amet</span>
                </a>
                <a href="#">
                  <i className="fa fa-phone"></i>
                  <span>Call : +01 1234567890</span>
                </a>
                <a href="#">
                  <i className="fa fa-envelope"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="col-md-3 info_form">
              <h5>Newsletter</h5>
              <form action="#">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </form>
              <div className="social_box">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-fluid footer_section">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By{" "}
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </footer>
    </>
  );
}

export default Countries;
