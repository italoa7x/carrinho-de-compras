import React from "react";
import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

import CustomCard from "../common/CustomCard";
import ListFooter from "./listFooter";
import ListItem from "./listItem";

const list = () => {
  return (
    <CustomCard link="/lista"
     footer={<ListFooter />} containerClass="list-container">
      <div>
        <p className="title">Mês</p>
        <div className="list-card-body">
          <ListItem icon={faShoppingBasket} description={"1 item restante"} />

          <ListItem icon={faCheck} description={"2 items comprados"}/>
        </div>
      </div>
    </CustomCard>
  );
};

export default list;
