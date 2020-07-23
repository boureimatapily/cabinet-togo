import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, Container } from "@material-ui/core";
// import { Link } from "react-router-dom";
import health from "../Images/health1.jpg";
import hospital3 from "../Images/hospital.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  healthDoctors: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginBottom: 20,
  },
  descriptionSize: {
    width: 300,
  },
  descriptionSizeTwo: {
    width: 400,
  },
  getStartButton: {
    color: "white",
    backgroundColor: "#2bd69a",
    width: 200,
    fontWeight: "bolder",
    marginBottom: 20,
  },

}));



export default function Hospital(props) {
  const classes = useStyles();
 

  return (
    <Container fixed>
      <Grid container className={classes.root}>
        <Grid item xs={6} md={6} lg={6}>
          <Paper className={classes.healthDoctors} elevation={3}>
            <h3>For Hospitals </h3>
            <img
              src={hospital3}
              style={{ width: 400, heigth: 300 }}
              alt="hospital"
            />
            <h3 className={classes.descriptionSize}>
              Create a folder for your Patient, Manage your Patient health and
              give a realtime update to your Doctor
            </h3>
            <Button className={classes.getStartButton} >
              Get Start
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} lg={6}>
          <Paper className={classes.healthDoctors} elevation={3}>
            <h3 style={{ marginBottom: 25 }}>
              Are you Doctors or health professionals
            </h3>
            <img
              src={health}
              style={{ width: 400, height: 300 }}
              alt="health"
            />
            <h3 className={classes.descriptionSizeTwo}>
              Manage your dialy activities form home, get realtime update about
              hospital, patient health and communicate with ohter Doctors and
              health professionals
            </h3>
            <Button className={classes.getStartButton}>
              Get Start
            </Button>
          </Paper>
        </Grid>

        
      </Grid>
    </Container>
  );
}
