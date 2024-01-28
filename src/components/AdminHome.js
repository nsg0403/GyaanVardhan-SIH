import * as React from "react";
import pic from "./logo1.png";
import img1 from "../images/domain.jfif";

import img2 from "../images/resources.jpg";
import im from "../images/img1.jpg";
import imt from "../images/img2.jpg";
import imt1 from "../images/img3.webp";

import img3 from "../images/grevance.jpg";

const AdminHome = () => {
  return (
    <>
      <div style={{ backgroundColor: "#00a69c" }}>
        <nav className="navbar navbar-expand-lg navbar-custom ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={pic} alt="" width="30" height="24"></img>
              &nbsp;Siksha Vardhan
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active cls"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link cls" href="#">
                    Courses
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle cls"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item cls" href="#">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item cls" href="#">
                        My Courses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item cls" href="#">
                        Change Password
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item cls" href="#">
                        Forget Password
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-danger cls" type="submit">
                  Admin
                </button>
              </form>
            </div>
          </div>
        </nav>
        {/* Navbar ends */}

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" style={{ height: 550 }}>
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={im}
                style={{ height: 500 }}
                alt="First slide"
              />
            </div>
            <div className="carousel-item" style={{ height: 550 }}>
              <img
                className="d-block w-100"
                src={imt}
                style={{ height: 500 }}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item" style={{ height: 550 }}>
              <img
                className="d-block w-100"
                src={imt1}
                style={{ height: 500 }}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* Carousel ends */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "#00a69c",
            marginTop: -51,
          }}
        >
          <div
            className="card"
            style={{
              width: "18rem",
              flexDirection: "column",
              marginTop: 30,
            }}
          >
            <img
              className="card-img-top"
              src={img1}
              alt="Card image cap"
              style={{ height: 150, width: 285 }}
            />
            <div className="card-body">
              <h2 className="card-text">Add Domain</h2>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "18rem",
              flexDirection: "column",
              marginTop: 30,
            }}
          >
            <img
              className="card-img-top"
              src={img2}
              alt="Card image cap"
              style={{ height: 150, width: 285 }}
            />
            <div className="card-body">
              <h2 className="card-text">Add Resources</h2>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "18rem",
              flexDirection: "column",
              marginTop: 30,
            }}
          >
            <img
              className="card-img-top"
              src={img3}
              alt="Card image cap"
              style={{ height: 150, width: 285 }}
            />
            <div className="card-body">
              <h2 className="card-text">Add Grievences</h2>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};
export default AdminHome;
