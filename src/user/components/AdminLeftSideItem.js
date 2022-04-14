import React from "react";

const AdminLeftSideItem = ({ icon, title }) => {
  return (
    <div className="sidebar__item">
      <div className="sidebar__item-inner">
        <i className={icon}></i>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default AdminLeftSideItem;
