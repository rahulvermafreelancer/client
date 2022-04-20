import React from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import BranchSidebar from "../BranchDashboardComponents/BranchSidebar";
import Menu from "../../core/Menu";
import Income from "./Income";
import HouseIncome from "./HouseIncome";
import OtherIncome from "./OtherIncome";
import BusinessIncome from "./BusinessIncome";
import CapitalGain from "./CapitalGain";
import ExemptedIncome from "./ExemptedIncome";
import D80c from "./D80c";
import D80G from "./D80G";
import OtherDeduction from "./OtherDeduction";

const ItrSubForms = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <BranchSidebar />
        </div>
        <div className="col-8">
          <Menu />
          <br />
          <Tabs onSelect={(index, label) => console.log(label + " selected")}>
            <Tab label="INCOME">
              <Tabs>
                <Tab label="Income From Salary / Pension">
                  <Income />
                </Tab>
                <Tab label="Income From House Property">
                  <HouseIncome />
                </Tab>
                <Tab label="Income From Other Sources">
                  <OtherIncome />
                </Tab>
                <Tab label="Income From Business/Profession">
                  <BusinessIncome />
                </Tab>
                <Tab label="Capital Gain">
                  <BusinessIncome />
                </Tab>
                <Tab label="Exempted Income">
                  <CapitalGain />
                </Tab>
                <Tab label="Exempted Income">
                  <ExemptedIncome />
                </Tab>
              </Tabs>
            </Tab>
            <Tab label="DEDUCTION">
              <Tabs>
                <Tab label="80 C">
                  <D80c />
                </Tab>
                <Tab label="80 G">
                  <D80G />
                </Tab>
                <Tab label="Other Deductions">
                  <OtherDeduction />
                </Tab>
                <Tab label="80 GGA">
                  <BusinessIncome />
                </Tab>
                <Tab label="80 D">
                  <BusinessIncome />
                </Tab>
              </Tabs>
            </Tab>
            <Tab label="TAXES PAID">Tab 3 content</Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ItrSubForms;
