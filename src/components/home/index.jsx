import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

import CustomCard from "../common/CustomCard";

import "./styles.css";

const Home = () => {
  return (
    <div className="page-container">
      <CustomCard containerClass="new-list-container">
        <div>
          <p className="title">Adicionar nova lista</p>
        </div>
      </CustomCard>
      <CustomCard 
        footer = {
          <div className="list-footer">
            <p>01/01/2020</p>
            <p>100.00</p>
          </div>
        }
        containerClass="list-container">
        <div>
          <p className="title">Mês</p>
          <div className="list-card-body">
            <div className="list-card-item">
              <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
              <p>1 item restante</p>
            </div>

            <div className="list-card-item">
              <FontAwesomeIcon icon={faCheck} size="sm" />
              <p>2 itens comprados</p>
            </div>
          </div>
        </div>
      </CustomCard>
    </div>
  );
};

export default Home;
