import React from "react";

import CustomCard from "../common/CustomCard";

import "./styles.css";

const newList = () => {
  return (
    <CustomCard link="/lista" containerClass="new-list-container">
    <div>
      <p className="title">Adicionar nova lista</p>
    </div>
  </CustomCard>
  );
}
export default newList;