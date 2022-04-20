import React, { useState } from "react";
import BranchSidebar from "../BranchDashboardComponents/BranchSidebar";
import "./styles.css";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";

const ApplyItr = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <BranchSidebar />
        </div>
        <div className="col-8">
          <div className="itr-home">
            <p className="title-itr">Register Client as Individual</p>
          </div>
          <form>
            <div className="personal-info-box">
              <p className="personal-para personal-para-text">
                Personal Information
              </p>
              <div className="name-field">
                <div className="dropdown-align">
                  <select
                    class="form-select select-layout"
                    id="inputGroupSelect02"
                  >
                    <option selected>--Select Group--</option>
                    <option value="1">Self</option>
                    <option value="2">Customer</option>
                  </select>
                </div>
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="PAN Number"
                />
              </div>
              <div className="name-field">
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Surname"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Middle Name"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="First Name"
                />
              </div>
              <div className="name-field">
                <div style={{ marginTop: 5 }}>
                  <DatePicker
                    className="personal-para"
                    onChange={onChange}
                    value={value}
                  />
                </div>
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Father Name"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Aadhar Number"
                />
              </div>

              <div className="name-field">
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder=" Aadhar Enrollment Id "
                />
                <div className="dropdown-align">
                  <select
                    class="form-select select-layout"
                    id="inputGroupSelect02"
                  >
                    <option selected>--Select Gender--</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="personal-info-box">
              <p className="personal-para personal-para-text">
                Address Details
              </p>
              <div className="name-field">
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Name of Premises / Building / Village"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Flat/Door/Building"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Road Street"
                />
              </div>

              <div className="name-field">
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Area/Locality"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Town/City"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="State"
                />
              </div>

              <div className="name-field">
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="District"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Pin code"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Country"
                />
              </div>
            </div>

            <div className="personal-info-box">
              <p className="personal-para personal-para-text">
                Contact Details
              </p>
              <div className="name-field">
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Land Line"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Primary Mobile No"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Secondary Mobile No."
                />
              </div>

              <div className="name-field">
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Primary Email"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Secondary Email"
                />
                <div className="dropdown-align">
                  <select
                    class="form-select select-layout"
                    id="inputGroupSelect02"
                  >
                    <option selected>--Select Group--</option>
                    <option value="1">Self</option>
                    <option value="2">Customer</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="personal-info-box">
              <p className="personal-para personal-para-text">Bank Details</p>
              <div className="name-field">
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Bank IFSC Code"
                />
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Bank Name"
                />
                <div className="dropdown-align">
                  <select
                    class="form-select select-layout"
                    id="inputGroupSelect02"
                  >
                    <option selected>--Account Type--</option>
                    <option value="1">Saving</option>
                    <option value="2">Current</option>
                  </select>
                </div>
              </div>
              <div className="name-field">
                <input
                  type="text"
                  class="form-control form-name"
                  placeholder="Account Number"
                />
              </div>
            </div>
            <Link
              className="btn btn-primary"
              style={{ margin: 15 }}
              to="/branch/applyitr/itrsubforms"
            >
              <p>Submit & Next</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyItr;
