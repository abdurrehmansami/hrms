import React from "react";
import Upcoming from "./Upcoming";
import Availability from "./Availability";
import "./style.css";
const MainTable = () => {
  return (
    <>
      <div className="flexbox-container">
        <div>
          <Upcoming />
        </div>
        <div>
          <Availability />
        </div>
      </div>
    </>
  );
};

export default MainTable;
