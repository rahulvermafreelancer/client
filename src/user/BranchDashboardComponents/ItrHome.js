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
          <div className="card-alignment">
          <ItrCard title="Total Pending ITR" number="15" />
          <ItrCard title="Total Processing ITR" number="3" />
          <ItrCard title="Total Pending For Details ITR" number="4" />
          <ItrCard title="Hold For Branch Confirmation" number="8" />
          <ItrCard title="Pending For E.R.I. Submission" number="5" />
          <ItrCard title="Total Completed ITR" number="5" />
          <ItrCard title="Total Rejected ITR" number="10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItrHome;
