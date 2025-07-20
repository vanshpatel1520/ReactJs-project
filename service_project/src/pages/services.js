import React from "react";

function Services() {
  return (
    <>
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our services</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="/images/s1.png" alt="Business Visa" />
                </div>
                <div className="detail-box">
                  <h6>Business Visa</h6>
                  <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="/images/s2.png" alt="Work Visa" />
                </div>
                <div className="detail-box">
                  <h6>Work Visa</h6>
                  <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="/images/s3.png" alt="Tourist Visa" />
                </div>
                <div className="detail-box">
                  <h6>Tourist Visa</h6>
                  <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="/images/s4.png" alt="Student Visa" />
                </div>
                <div className="detail-box">
                  <h6>Student Visa</h6>
                  <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
