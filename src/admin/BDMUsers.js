import React from "react";
import Table from "../user/components/Table";
import AdminLeftSide from "../user/AdminLeftSide";

const BDMUsers = () => {
  return (
    <div className="row">
      <div className="col-3">
        <AdminLeftSide />
      </div>
      <div className="col-8" style={{ marginTop: "5%" }}>
        <Table />
      </div>
    </div>
  );
};

export default BDMUsers;
