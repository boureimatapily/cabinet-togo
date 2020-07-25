import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  //   title:{
  //       display:"flex",
  //       flexDirection:"column",
  //       alignItems:"center",
  //       justifyContent:"center",
  //       marginTop:30,
  //   },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container className={classes.root}>
        <Grid
          item xs={12} sm={12} md={12} lg={12}
          className={classes.titleContainer}
        >
          <Paper elevation={1}>
            <h3> Cabinet Comptable Antime Togo </h3>
          </Paper>
        </Grid>
      </Grid>
     
    </Container>
  );
}
