import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("mydata"));
  const [hoveredLink, setHoveredLink] = useState(null);

  function Logout() {
    localStorage.clear();
    navigate("/");
  }

  // Style for nav links
  const linkStyle = (index) => ({
    color: "white",
    padding: "8px 12px",
    borderRadius: "5px",
    textDecoration: "none",
    backgroundColor: hoveredLink === index ? "#5b5b5b" : "transparent",
    transition: "background-color 0.3s ease",
  });

  return (
    <>
      <header
        className="header_section"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Top Contact Bar */}
        <div
          className="header_top"
          style={{
            backgroundColor: "#081d45",
            color: "white",
            padding: "10px 0",
          }}
        >
          <div className="container-fluid d-flex justify-content-between px-5">
            <span>
              <i
                className="fa fa-map-marker mr-2 text-success"
                aria-hidden="true"
              ></i>
              Lorem ipsum dolor sit amet,
            </span>
            <span>
              <i
                className="fa fa-phone mr-2 text-success"
                aria-hidden="true"
              ></i>
              Call : +01 1234567890
            </span>
            <span>
              <i
                className="fa fa-envelope mr-2 text-success"
                aria-hidden="true"
              ></i>
              demo@gmail.com
            </span>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="header_bottom" style={{ backgroundColor: "#1b1b1b" }}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              {/* Logo */}
              <Link
                className="navbar-brand text-white font-weight-bold"
                to="/"
                style={{ fontSize: "28px" }}
              >
                Viseas
              </Link>

              {/* Nav links */}
              <div className="collapse navbar-collapse ml-auto">
                <ul
                  className="navbar-nav ml-auto d-flex align-items-center"
                  style={{ listStyle: "none", margin: 0, padding: 0 }}
                >
                  {["Home", "Services", "About", "Countries", "Contact Us"].map(
                    (label, idx) => {
                      const paths = [
                        "/",
                        "/service",
                        "/about",
                        "/countries",
                        "/contact",
                      ];
                      return (
                        <li className="nav-item" key={label}>
                          <Link
                            to={paths[idx]}
                            className="nav-link"
                            onMouseEnter={() => setHoveredLink(idx)}
                            onMouseLeave={() => setHoveredLink(null)}
                            style={linkStyle(idx)}
                          >
                            {label}
                          </Link>
                        </li>
                      );
                    }
                  )}

                  {/* User options */}
                  {user ? (
                    <>
                      <li className="nav-item">
                        <span
                          className="nav-link"
                          style={{ ...linkStyle(5), cursor: "default" }}
                        >
                          Welcome, {user.sname}
                        </span>
                      </li>
                      <li className="nav-item">
                        <span
                          className="nav-link"
                          onClick={Logout}
                          onMouseEnter={() => setHoveredLink(6)}
                          onMouseLeave={() => setHoveredLink(null)}
                          style={{ ...linkStyle(6), cursor: "pointer" }}
                        >
                          Logout
                        </span>
                      </li>
                    </>
                  ) : (
                    <li className="nav-item">
                      <Link
                        to="/register"
                        className="nav-link"
                        onMouseEnter={() => setHoveredLink(7)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={linkStyle(7)}
                      >
                        Register
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
