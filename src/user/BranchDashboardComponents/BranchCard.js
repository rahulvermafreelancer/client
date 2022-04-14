import React from "react";

const BranchCard = ({ title, image }) => {
  return (
    <div className="card-main-container">
      <img src={image} alt="itr-pic" width="50px" />
      <p>{title}</p>
    </div>
  );
};

export default BranchCard;
