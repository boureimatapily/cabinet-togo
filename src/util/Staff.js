import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Card, Paper, Grid } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardPaper: {
    margin: 5,
    paddingTop:20
  },
  content: {
    textAlign: "center",
  },
  imgCard: {
    width: 250,
    height: 200,
    margin: "auto",
  },
}));

export default function Services({ image,job, name }) {
  const classes = useStyles();
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <div>
    
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
                          {name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          {job}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    
                  </Card>
                </Paper>
              </div>
            </Grid>
          </Grid>
       
      </div>
    </animated.div>
  );
}
