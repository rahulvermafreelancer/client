import React from "react";
import AdminLeftSide from "./AdminLeftSide";
import AdminRightSide from "./AdminRightSide";
import "./styles.css";
import Menu from "../core/Menu";

const AdminDashBoard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <AdminLeftSide />
        </div>
        <div className="col-8">
          <Menu />
          <br />
          <AdminRightSide />
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
