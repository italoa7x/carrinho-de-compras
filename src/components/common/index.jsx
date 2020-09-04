import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

import "./styles.css";

const Common = () => {
  return (
    <AppBar position="static" color="primary">
      <div className="header">
        <Link to="/">
          <p className="title text-left">Lista de compras</p>
        </Link>
      </div>
    </AppBar>
  );
};

export default Common;
