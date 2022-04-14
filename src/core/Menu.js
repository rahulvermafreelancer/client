import React from "react";
import "./styles.css";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const UserMenu = () => {
  const {
    user: { firstname, email, image, role, lastname }
  } = isAutheticated();

  return (
    <div className="user-menu-main-container">
      <div>
        {image ? (
          <img src={image} className="user-photo-size" alt="user-pic" />
        ) : (
          <img
            src={"/assets/user.jpg"}
            className="user-photo-size"
            alt="user-demo-pic"
          />
        )}
      </div>
      <div>
        <p>
          {firstname} {lastname}
        </p>
      </div>
      <div>
        <p>{role}</p>
      </div>
    </div>
  );
};

const Menu = ({ history }) => (
  <div className="Menu-top-bar-main-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        {!isAutheticated() && (
          <Link class="navbar-brand">
            <img
              src={"/assets/mandoriya.png"}
              className="Navbar-Logo-mandoriya"
              alt="mandoriya-logo"
            />
          </Link>
        )}

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {isAutheticated() && (
          <div
            class="collapse navbar-collapse position-align-menu"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" href="#">
                  <UserMenu />
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  </div>
);

export default withRouter(Menu);
