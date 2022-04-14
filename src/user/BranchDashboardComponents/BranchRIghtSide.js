import React from "react";
import AutoScroll from "./AutoScroll";
import "./styles.css";
import BranchCard from "./BranchCard";

const BranchRightSide = () => {
  return (
    <div>
      <div>
        <AutoScroll />
      </div>
      <div>
        <p className="itrmgmt">I.T.R Management</p>
        <div className="row">
          <BranchCard image="/assets/coupen.webp" title="Purchase Coupon" />
          <BranchCard image="/assets/coupen.webp" title="Apply for I.T.R" />
          <BranchCard image="/assets/coupen.webp" title="Report Status" />
        </div>
      </div>
      <div>
        <p className="itrmgmt">GST Management</p>
        <div className="row">
          <BranchCard
            image="/assets/coupen.webp"
            title="Apply for GST Registration"
          />
          <BranchCard image="/assets/coupen.webp" title="Registration Status" />
          <BranchCard
            image="/assets/coupen.webp"
            title="Apply for GST Return"
          />
        </div>
      </div>

      <div>
        <p className="itrmgmt">Other Products</p>
        <div className="row">
          <BranchCard image="/assets/coupen.webp" title="Order Other Product" />
          <BranchCard image="/assets/coupen.webp" title="Order Status" />
        </div>
      </div>
    </div>
  );
};

export default BranchRightSide;
