import React from "react";
import { Container, Grid, Paper, Button, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import covid from "../Images/covid.jpg";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
// Making styles
const styles = (theme) => ({
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    alignItems: "center",
  },

  getStartButton: {
    color: "white",
    backgroundColor: "#2bd69a",
    marginBottom: 20,
    fontWeight: "bolder",
  },

  covidImage: {
    width: "300",
    height: 300,
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    alignItems: "center",
  },
  contactPaper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 10,
    alignItems: "center",
    width: 250,
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Container fixed>
        {/* first Container */}
        <Grid
          container
          style={{ marginTop: 10 }}
          className={classes.firstContainer}
        >
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Paper elevation={0}>
              <div className={classes.firstContainerFirstDiv}>
                <h2> Fight COVID-19 With Codetrain and Covid Care Platform </h2>
                <h4>
                  {" "}
                  Are you Doctor, health professional or Hospital Managwer
                </h4>
                <div className={classes.contact}>
                  <Paper className={classes.contactPaper}>
                    <LocalHospitalIcon
                      style={{ color: "red", width: 50, height: 50 }}
                    />
                    <h2>Hospital </h2>

                    <Link to="/hospital">
                      <Button
                        className={classes.getStartButton}
                        variant="contained"
                        color="primary"
                      >
                        {" "}
                        Get Start
                      </Button>
                    </Link>
                  </Paper>
                  <Paper className={classes.contactPaper}>
                    <PersonAddIcon
                      style={{ color: "#2bd69a", width: 50, height: 50 }}
                    />
                    <h2>health professionals </h2>
                    <Link to="/health">
                      <Button
                        className={classes.getStartButton}
                        variant="contained"
                        color="primary"
                      >
                        Get Start
                      </Button>
                    </Link>
                  </Paper>
                </div>
              </div>
            </Paper>
          </Grid>
          <Hidden smDown>
            <Grid item  md={6} lg={6}>
              <Paper elevation={0}>
                <div>
                  <img
                    src={covid}
                    alt="covid-care"
                    className={classes.covidImage}
                  />
                </div>
              </Paper>
            </Grid>
            </Hidden>
          </Grid>
      </Container>
    );
  }
}
Home.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
export default withStyles(styles)(Home);
