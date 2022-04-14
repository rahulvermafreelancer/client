import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import AdminLeftSide from "./AdminLeftSide";
import Menu from "../core/Menu";

const Signup = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    error: "",
    role: "",
    success: false
  });

  const { firstname, lastname, email, password, error, success, role } = values;

  const handleChange =
    (firstname, lastname, email, password, role) => (event) => {
      setValues({
        ...values,
        error: false,
        [firstname]: event.target.value,
        [lastname]: event.target.value,
        [email]: event.target.value,
        [password]: event.target.value,
        [role]: event.target.value
      });
    };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ firstname, lastname, email, password, role })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false, role });
        } else {
          setValues({
            ...values,
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            error: "",
            success: true,
            role: ""
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="content mt-5">
        <div className="container">
          <div className="row">
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <form action="#" method="post">
                    <div class="form-group first">
                      <label for="username">First Name</label>
                      <input
                        class="form-control"
                        id="username"
                        onChange={handleChange("firstname")}
                        type="text"
                        value={firstname}
                      />
                    </div>
                    <div class="form-group last mb-4">
                      <label for="username">Last Name</label>
                      <input
                        class="form-control"
                        id="username"
                        onChange={handleChange("lastname")}
                        type="text"
                        value={lastname}
                      />
                    </div>

                    <div class="form-group first">
                      <label for="username">Email</label>
                      <input
                        class="form-control"
                        id="username"
                        onChange={handleChange("email")}
                        type="email"
                        value={email}
                      />
                    </div>
                    <div class="form-group last mb-4">
                      <label for="password">Password</label>
                      <input
                        class="form-control"
                        id="password"
                        onChange={handleChange("password")}
                        type="password"
                        value={password}
                      />
                    </div>

                    <div class="form-group first">
                      <label for="username">Role</label>
                      <input
                        class="form-control"
                        id="username"
                        onChange={handleChange("role")}
                        type="number"
                        value={role}
                      />
                    </div>

                    <input
                      type="submit"
                      value="Create new BDM User"
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

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
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

  return (
    <div className="row">
      <div className="col-3">
        <AdminLeftSide />
      </div>
      <div className="col-8">
        <Menu />
        {successMessage()}
        {errorMessage()}
        {signUpForm()}
      </div>
    </div>
  );
};

export default Signup;
