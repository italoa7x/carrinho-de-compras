import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const listItem = (props) => (
  <div className="list-card-item">
    <FontAwesomeIcon icon={props.icon} size="sm" />
    <p>{props.description}</p>
  </div>
);

export default listItem;
