import React from "react";
import { Link } from "react-router-dom";

const BranchCard = ({ title, image, address }) => {
  return (
    <Link className="card-main-container" to={address}>
      <img src={image} alt="itr-pic" width="50px" />
      <p>{title}</p>
    </Link>
  );
};

export default BranchCard;
