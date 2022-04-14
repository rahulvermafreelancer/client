import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";

import { signin, authenticate, isAutheticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch(console.log("signin request Accept"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 3) {
        return <Redirect to="/admin/dashboard" />;
      } else if (user && user.role === 2) {
        return <Redirect to="/bdm/dashboard" />;
      } else if (user && user.role === 1) {
        return <Redirect to="/branch/dashboard" />;
      } else if (user && user.role === 0) {
        return <Redirect to="/user/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="content" style={{ marginTop: "10%" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={"./assets/signin.svg"} alt="signin" class="img-fluid" />
            </div>
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="mb-4">
                    <h3>Sign In</h3>
                    <p class="mb-4">
                      Welcome to{" "}
                      <span style={{ fontWeight: "bolder" }}>
                        Mandoriya Group Portal
                      </span>
                    </p>
                  </div>
                  <form action="#" method="post">
                    <div class="form-group first">
                      <label for="username">Username</label>
                      <input
                        type="email"
                        class="form-control"
                        id="username"
                        onChange={handleChange("email")}
                        value={email}
                      />
                    </div>
                    <div class="form-group last mb-4">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        onChange={handleChange("password")}
                        value={password}
                      />
                    </div>

                    <div class="d-flex mb-5 align-items-center">
                      <label class="control control--checkbox mb-0">
                        <span class="caption">Remember me</span>
                        <input type="checkbox" checked="checked" />
                        <div class="control__indicator"></div>
                      </label>
                      <span class="ml-auto">
                        <a href="#" class="forgot-pass">
                          Forgot Password
                        </a>
                      </span>
                    </div>
                    <input
                      type="submit"
                      value="Log In"
                      class="btn btn-block btn-primary"
                      onClick={onSubmit}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base>
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default Signin;
