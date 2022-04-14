import React from "react";
import AdminLeftSide from "../user/AdminLeftSide";

const AddROCBranch = () => {
  return (
    <div className="row">
      <div className="col-3">
        <AdminLeftSide />
      </div>
      <div className="col-8" style={{ marginTop: "5%" }}>
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-6 contents">
                <div class="row justify-content-center">
                  <div class="col-md-8">
                    <div class="mb-4">
                      <h3>Add R.O.C Branch</h3>
                    </div>
                    <form action="#" method="post">
                      <div class="form-group first">
                        <label for="fullname">Branch ID</label>
                        <input type="text" class="form-control" id="fullname" />
                      </div>
                      <div class="form-group first">
                        <label for="fullname">First Name</label>
                        <input type="text" class="form-control" id="fullname" />
                      </div>
                      <div class="form-group first">
                        <label for="fullname">Last name</label>
                        <input type="text" class="form-control" id="fullname" />
                      </div>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" />
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                        />
                      </div>
                      <div class="form-group first">
                        <label for="fullname">Upload Photo</label>
                        <input type="file" class="form-control" id="fullname" />
                      </div>
                      <input
                        type="submit"
                        value="Create"
                        class="btn btn-block btn-primary"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddROCBranch;
