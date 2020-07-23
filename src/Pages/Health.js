import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Container } from "@material-ui/core";
// import { Link } from "react-router-dom";
import health from "../Images/health1.jpg";
import DoctorLoginModal from "../Components/Login/DoctorLoginModal";
import DoctorSignupModal from "../Components/Signup/DoctorSignupModal";

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

export default function Health() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.healthDoctorsMainSection} elevation={0}>
            <div>
               
            <img
              src={health}
              style={{ width: 400, height: 300 }}
              alt="health"
            />
            </div>
              <div>
              <h3 style={{ marginBottom: 25 }}>
              Are you Doctors or health professionals
            </h3>
            <h3 className={classes.descriptionSize}>
              Manage your dialy activities form home, get realtime update about
              hospital, patient health and communicate with ohter Doctors and
              health professionals
            </h3>
              </div>

          </Paper>
        </Grid>
      </Grid>

      <Grid container className={classes.root}>
        <Grid item xs={6} md={6} lg={6}>
          <Paper className={classes.healthDoctors} elevation={3}>
            <h2>Log In to Covid Care</h2>
            <DoctorLoginModal />
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} lg={6}>
          <Paper className={classes.healthDoctors} elevation={3}>
            <DoctorSignupModal />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
