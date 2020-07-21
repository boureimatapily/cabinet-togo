import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Card, Paper } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    },
    cardPaper:{
        margin:10
    },
    content:{
        textAlign:"center"
    }
  
}));

export default function Services({image, description, buttonText}) {
  const classes = useStyles();
   
  return (
    <div className={classes.root}>
         <Paper className={classes.cardPaper}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={image}
          
            title="Contemplative Reptile"
            className={classes.imgCard}
          >
            
         </CardMedia> 
          <CardContent className={classes.content}>
           
            <Typography variant="body2" color="textSecondary" component="p" 
            style={{ color:"black", fontWeight:"bold"}}>
                {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{marginLeft:"30%"}}>
          <Button style={{backgroundColor:"#2bd69a", color:"white", fontWeight:"bold"}}>
            {buttonText}
          </Button>
          
        </CardActions>
      </Card>
      </Paper>
    </div>
  );
}
