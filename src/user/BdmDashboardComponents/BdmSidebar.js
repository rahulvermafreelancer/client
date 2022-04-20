import React from "react";
import { Link } from "react-router-dom";
import AdminLeftSideItem from "../components/AdminLeftSideItem";

const BdmSidebar = () => {
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
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="Check I.T.R." />
      </Link>

      <Link to="">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="Check GST Registration" />
      </Link>

      <Link to="">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="Check GST Return" />
      </Link>
      <Link to="">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="Check Other Products" />
      </Link>
    </div>
  );
};

export default BdmSidebar;
