import React from "react";

export default ({ img, link }) => (
  <div style={{ padding: "30px", display: "inline-block" }}>
    <a href={link} target="_blank">
      <img src={img} alt="" style={{ height: "100px", width: "200px" }} />
    </a>
  </div>
);
