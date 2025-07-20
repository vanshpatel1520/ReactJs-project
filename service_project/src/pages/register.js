import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    // alert(email);
    Axios.post("http://localhost:1520/api/insert", {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    }).then(() => {
      Swal.fire({
        title: "Success!",
        text: "User Registered!!!.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location = "/login";
      });
    });
  };

  return (
    <div>
      <section className="contact_section layout_padding">
        <div className="contact_bg_box">
          <img src="images/contact-bg.jpg" alt="" />
        </div>
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Register</h2>
            <p>Create your account below</p>
          </div>
          <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-9 mx-auto">
                <div className="form_container">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        id="mobile"
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      id="confirm_password"
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="btn-box">
                    <button type="submit" id="submit">
                      Register
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <p>
                      Already registered?{" "}
                      <Link to="/login" className="text-primary">
                        Login here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="container-fluid footer_section">
        {/* Optional footer content */}
      </footer>
    </div>
  );
}

export default Register;
