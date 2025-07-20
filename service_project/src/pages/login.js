import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Axios from "axios";

function Login() {
  const postdata = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    Axios.post("http://localhost:1520/api/verify", { email, password })
      .then((res) => {
        if (res.data.message) {
          Swal.fire("Error", res.data.message, "error");
        } else {
          const user = {
            sname: res.data[0].name,
            email: res.data[0].email,
          };
          localStorage.setItem("mydata", JSON.stringify(user));
          Swal.fire("Welcome", `Hello ${res.data[0].name}`, "success").then(
            () => (window.location = "/")
          );
        }
      })
      .catch((err) => {
        console.error("Login request failed:", err);
        Swal.fire("Error", "Server error, try again later", "error");
      });
  };
  return (
    <>
      <div>
        {/* Login Section */}
        <section
          className="contact_section layout_padding d-flex align-items-center"
          style={{ minHeight: "100vh", position: "relative" }}
        >
          <div className="contact_bg_box">
            <img
              src="images/contact-bg.jpg"
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1",
              }}
            />
          </div>

          <div className="container">
            <div className="heading_container heading_center mb-5">
              <h2>LOGIN</h2>
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#A2FF86",
                  margin: "0 auto",
                }}
              />
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="form_container text-center">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      postdata();
                    }}
                  >
                    <div className="form-group mb-4">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group mb-4">
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>

                    <div className="btn-box mb-3">
                      <button
                        onClick={postdata}
                        type="submit"
                        className="btn btn-success"
                      >
                        LOGIN
                      </button>
                    </div>

                    <p>
                      Don't have an account?{" "}
                      <a href="/register" className="text-info">
                        Register here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="container-fluid footer_section">
          {/* Optional footer content */}
        </footer>
      </div>
    </>
  );
}

export default Login;
