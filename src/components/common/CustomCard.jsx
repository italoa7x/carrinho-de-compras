import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";

const CustomCommon = (props) => {
  return (
    <div className={props.containerClass}>
      <Card className="card">
        <CardActionArea className="card-action-area">
          <CardContent className="card-content">
            {props.children}
          </CardContent>
        </CardActionArea>
        {
          props.footer && (
            <>
              <Divider />
              <CardActions className="card-footer">
                { props.footer }
              </CardActions>
            </>
          )
        }
      </Card>
    </div>
  );
}

export default CustomCommon;