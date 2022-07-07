import React from "react";
import PrimarySearchAppBar from "../Home/AppBar/AppBar";
import SideBar from "../Home/SideBar/SideBar";
import MainTable from "./Table/MainTable";

const Home = () => {
  return (
    <>
      <div className="home">
        <SideBar className="sidebar" />
        <PrimarySearchAppBar className="appbar" />

        <MainTable />
      </div>
    </>
  );
};

export default Home;
