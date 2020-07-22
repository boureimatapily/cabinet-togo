import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { TextField, Button, Typography, Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import health from '../Images/health1.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  healthDoctors:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
}));

export default function Login() {
  const classes = useStyles();
 
  return (
    <Container fixed>
        <Grid container>
          <Grid item xs={6} md={6} lg={6} >
              <Paper>
                  <h1>hello</h1>
                <img src={health} style={{width:400, heigth:300}} alt="hospital" />
              </Paper>
          </Grid>
          <Grid item xs={6} md={6} lg={6} >
              <Paper className={classes.healthDoctors}>
               <h3>Are you Doctors or health professionals</h3>
               <img src={health} style={{width:400, height:300}} alt="health" />
              </Paper>
          </Grid>
        </Grid>
    </Container>
  );
}
