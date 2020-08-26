import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import "./styles.css";

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="new-list-container">
        <Card className="card">
          <CardActionArea className="card-action-area">
            <CardContent className="card-content">
              <div>
                <p className="title">Adicionar nova lista</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Home;
