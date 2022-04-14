import React from "react";

const AdminCard = ({ className, count, title }) => {
  return (
    <div className="status-card">
      <div className="status-card__icon">
        <i className={className}></i>
      </div>
      <div className="status-card__info">
        <h4>{count}</h4>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default AdminCard;
