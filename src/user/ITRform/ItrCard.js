import React from "react";

const ItrCard = ({ title, number }) => {
  return (
    <div className="itr-box">
      <div>
        <h3 className="itr-mainbox-title">{title}</h3>
      </div>
      <div className="circle-border">
        <h3>{number}</h3>
      </div>
    </div>
  );
};

export default ItrCard;
