import React from "react";
import { Link } from "react-router-dom";
import AdminLeftSideItem from "../components/AdminLeftSideItem";

const BranchSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={"/assets/mandoriya.png"} alt="company logo" />
      </div>
      <Link to="/branch/dashboard">
        <AdminLeftSideItem
          icon="fi fi-rr-apps-add dashboard-icon"
          title="Dashboard"
        />
      </Link>
      <Link to="/branch/itrhome">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="I.T.R mgmt." />
      </Link>

      <Link to="">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="GST Registration" />
      </Link>

      <Link to="">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="GST Return" />
      </Link>
      <Link to="">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="Other Products" />
      </Link>
    </div>
  );
};

export default BranchSidebar;
