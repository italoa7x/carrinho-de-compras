import React from "react";
import AppBar from "@material-ui/core/AppBar";

import "./styles.css";

const Common: React.FC = () => {
    return (
        <AppBar position="static" color="primary">
            <div className="header">
                <p className="title">Lista de compras</p>
            </div>
        </AppBar>
    )
}

export default Common;