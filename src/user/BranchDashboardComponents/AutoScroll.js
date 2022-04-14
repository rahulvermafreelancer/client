import React from "react";

const AutoScroll = () => {
  const data = [
    {
      id: 1,
      message: "Message One"
    },
    {
      id: 2,
      message: "Message Two"
    },
    {
      id: 3,
      message: "Message Three"
    },
    {
      id: 4,
      message: "Message Four"
    }
  ];

  return (
    <div className="container scrolling-box-main">
      {data.map((item) => (
        <div className="latest-updates">
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AutoScroll;
