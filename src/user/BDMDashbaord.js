import React from "react";
import BdmSidebar from "./BdmDashboardComponents/BdmSidebar";
import Menu from "../core/Menu";

const BDMDashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <BdmSidebar />
        </div>
        <div className="col-8">
          <Menu />
          <br />
        </div>
      </div>
    </div>
  );
};

export default BDMDashboard;
