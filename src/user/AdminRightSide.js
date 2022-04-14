import React from "react";
import Chart from "./components/Chart";
import AdminCard from "./components/AdminCard";
import Table from "./components/Table";

const AdminRightSide = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <AdminCard
                icon="fi fi-rr-cloud-download"
                count="254"
                title="Sales"
              />
            </div>
            <div className="col-6">
              <AdminCard icon="fi fi-rr-apps-add" count="254" title="Sales" />
            </div>
            <div className="col-6">
              <AdminCard icon="fi fi-rr-apps-add" count="254" title="Sales" />
            </div>
            <div className="col-6">
              <AdminCard icon="fi fi-rr-apps-add" count="254" title="Sales" />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart />
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default AdminRightSide;
