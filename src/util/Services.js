import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Card, Paper, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardPaper: {
    margin: 5,
  },
  content: {
    textAlign: "center",
  },
  imgCard: {
    width: 100,
    height: 100,
    margin:"auto"
  },
}));

export default function Services({ image, description, buttonText, link }) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={12} xs={12} md={12} lg={12}>
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
                ></CardMedia>
                <CardContent className={classes.content}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ marginLeft: "30%" }}>
                <NavLink to={link}> 
                <Button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {buttonText}
                </Button>
                </NavLink>
              </CardActions>
            </Card>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}
