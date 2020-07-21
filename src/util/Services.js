import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Services({image, description, buttonText}) {
  const classes = useStyles();
   
  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={image}
            height="140"
            title="Contemplative Reptile"
          >
            
         </CardMedia> 
          <CardContent>
           
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{backgroundColor:"#2bd69a", color:"white", fontWeight:"bold"}}>
            {buttonText}
          </Button>
          
        </CardActions>
      </Card>
    </div>
  );
}
