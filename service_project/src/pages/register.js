import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [emailExists, setEmailExists] = useState(false);
  const email = watch("email");
  const password = watch("password");

  const checkEmail = () => {
    if (!email) return;
    Axios.post("http://localhost:1520/api/verifyemail", {
      email: email,
    }).then((res) => {
      if (res.data.message === "email already registered!") {
        setEmailExists(true);
        Swal.fire({
          title: "Error",
          text: "This email is already registered!",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        setEmailExists(false);
      }
    });
  };

  const onSubmit = (data) => {
    if (emailExists) {
      Swal.fire({
        title: "Error",
        text: "Cannot register with this email. Try another one.",
        icon: "error",
      });
      return;
    }

    Axios.post("http://localhost:1520/api/insert", {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
    }).then(() => {
      Swal.fire({
        title: "Success!",
        text: "User Registered!!!",
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
                  {/* Name */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      {...register("name", {
                        required: "Name is required",
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Name must contain only letters and spaces",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email format",
                        },
                      })}
                      onBlur={checkEmail}
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      {...register("mobile", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Phone number must be 10 digits",
                        },
                      })}
                    />
                    {errors.mobile && (
                      <p className="text-danger">{errors.mobile.message}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-danger">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <p className="text-danger">
                        {errors.confirmPassword.message}
                      </p>
                    )}
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

      <footer className="container-fluid footer_section">{/* Footer */}</footer>
    </div>
  );
}

export default Register;
