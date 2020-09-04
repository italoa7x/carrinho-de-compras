import React from "react";

import List from "./list";
import NewList from "./newList";

import "./styles.css";

const Home = () => {
  return (
    <div className="page-container">
      <NewList />
      <List />
    </div>
  );
};

export default Home;
