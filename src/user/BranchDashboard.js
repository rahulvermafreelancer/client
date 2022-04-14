import React from "react";
import Menu from "../core/Menu";
import BranchSidebar from "./BranchDashboardComponents/BranchSidebar";
import BranchRightSide from "./BranchDashboardComponents/BranchRIghtSide";

const BranchDashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <BranchSidebar />
        </div>
        <div className="col-8">
          <Menu />
          <br />
          <BranchRightSide />
        </div>
      </div>
    </div>
  );
};

export default BranchDashboard;
