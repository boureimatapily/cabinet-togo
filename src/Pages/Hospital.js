import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Container } from "@material-ui/core";
// import { Link } from "react-router-dom";
import hospital3 from "../Images/hospital.jpg";
import HospitalLoginModal from "../Components/Login/HospitalLoginModal";


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
  healthDoctorsMainSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 10,
    marginBottom: 20,
  },
  descriptionSize: {
    width: 300,
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
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.healthDoctorsMainSection} elevation={0}>
            <div>
              <img
                src={hospital3}
                style={{ width: 400, heigth: 300 }}
                alt="hospital"
              />
            </div>

            <div>
              <h3 className={classes.descriptionSize}>
                Create a folder for your Patient, Manage your Patient health and
                give a realtime update to your Doctor
              </h3>
            </div>
          </Paper>
        </Grid>
      </Grid>


      <Grid container className={classes.root}>
        <Grid item xs={6} md={6} lg={6}>
          <Paper className={classes.healthDoctors} elevation={3}>
          <h2>Log In to Covid Care</h2>
          <HospitalLoginModal />
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} lg={6}>
          <Paper className={classes.healthDoctors} elevation={3}>
            <h1>Signup</h1>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
