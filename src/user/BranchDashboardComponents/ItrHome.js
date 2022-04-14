import React from "react";
import { Link } from "react-router-dom";
import BranchSidebar from "./BranchSidebar";
import Menu from "../../core/Menu";
import ItrCard from "../ITRform/ItrCard";

const ItrHome = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <BranchSidebar />
        </div>
        <div className="col-8">
          <Menu />
          <br />
          <div className="itr-home">
            <p className="title-itr">ITR Home</p>
          </div>
          <ItrCard title="Total Pending ITR" />
        </div>
      </div>
    </div>
  );
};

export default ItrHome;
