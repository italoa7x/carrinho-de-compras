import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardAction from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Home: React.FC = () => {
  return (
    /**
     * Card de adicionar novos itens a lista
     */
    <div className="page-container">
      <div className="new-list-container">
        <Card className="card">
          <CardActionArea className="card-action-area">
            <CardContent className="card-content">
              <div>
                <p className="title">Adicionar itens a lista</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="list-container">
        <Card className="card">
          <CardActionArea className="card-action-area">
            <CardContent className="card-content">
              <div>
                <p className="title">Mês</p>
                <div className="list-card-body">
                  <div className="list-card-item">
                    <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
                    <p>1 Item adicionado</p>
                  </div>
                  <div className="list-card-item">
                    <FontAwesomeIcon icon={faCheck} size="sm" />
                    <p>2 Itens comprados</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardAction className="card-footer">
            <p>01/10/2020</p>
            <p>100</p>
          </CardAction>
        </Card>
      </div>
    </div>
  );
};

export default Home;
