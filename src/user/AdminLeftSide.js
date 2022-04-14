import React from "react";
import { Link } from "react-router-dom";
import AdminLeftSideItem from "./components/AdminLeftSideItem";

const AdminLeftSide = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={"/assets/mandoriya.png"} alt="company logo" />
      </div>
      <Link to="/admin/dashboard">
        <AdminLeftSideItem
          icon="fi fi-rr-apps-add dashboard-icon"
          title="Dashboard"
        />
      </Link>
      <Link
        // to="/admin/create/product"
        to="/signup"
      >
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="BDM Login" />
      </Link>

      <Link to="/admin/bdmusers">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="BDM Users" />
      </Link>

      <Link
        // to="/admin/create/category"
        to="/admin/addrocbranch"
      >
        <AdminLeftSideItem
          icon="fi fi-rr-apps-add "
          title="Create R.O.C Branch"
        />
      </Link>
      <Link to="/admin/bdmusers">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="R.O.C Branch" />
      </Link>
      <Link
        // to="/admin/products"
        to="/admin/customers"
      >
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="Customers" />
      </Link>
      <Link to="/admin/orders">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="Products" />
      </Link>
      <Link to="/admin/orders">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="Orders" />
      </Link>
      <Link to="/admin/orders">
        <AdminLeftSideItem
          icon="fi fi-rr-apps-add "
          title="Create New Branch"
        />
      </Link>
      <Link to="/admin/orders">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="Create Staff ID" />
      </Link>
      <Link to="/admin/orders">
        <AdminLeftSideItem icon="fi fi-rr-apps-add " title="New Admin Login" />
      </Link>
    </div>
  );
};

export default AdminLeftSide;
