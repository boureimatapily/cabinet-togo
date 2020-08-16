import React from "react";
import { Container, Grid, Paper, Button, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import pierre from "../Images/pierre.png";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import InfoIcon from '@material-ui/icons/Info';
import ServicesSection from "../Components/Home/ServicesSection";


// Making styles
const styles = (theme) => ({
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    alignItems: "center",
  },
  secondContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },

  getStartButton: {
    color: "white",
    backgroundColor: "blue",
    marginBottom: 20,
    fontWeight: "bolder",
  },

  pierre: {
    height: 350,
    width: 350,
    marginLeft:50,
    marginTop:50,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 150,
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
                <h2> Cabinet Comptable Antime Togo </h2>
                <h4>
                Le cabinet comptable Antimé TOGO est inscrit au tableau de l’Ordre National
                 des Experts Comptable et Comptable Agrées du Mali (ONECCA-MALI).
                   </h4>
                <div className={classes.contact}>
                  <Paper className={classes.contactPaper}>
                    <ContactPhoneIcon
                      style={{ color: "black", width: 50, height: 50 }}
                    />
                    <h2>Contactez Nous </h2>

                    <Link to="/contact">
                      <Button
                        className={classes.getStartButton}
                        variant="contained"
                        color="primary"
                      >
                        {" "}
                        Par ici ...
                      </Button>
                    </Link>
                  </Paper>
                  <Paper className={classes.contactPaper}>
                    <InfoIcon
                      style={{ color: "blue", width: 50, height: 50 }}
                    />
                    <h2>A Propos</h2>
                    <Link to="/about">
                      <Button
                        className={classes.getStartButton}
                        variant="contained"
                        color="primary"
                      >
                         Par ici ...
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
                    src={pierre}
                    alt="pierre"
                    className={classes.pierre}
                  />
                </div>
              </Paper>
            </Grid>
            </Hidden>
          </Grid>
          <Grid container>
            <Grid item sm={12} xs={12} md={12} lg={12} className={classes.secondContainer}>
                <h1>NOS SERVICES</h1>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={12} xs={12} md={12} lg={12} className={classes.secondContainer}>
                <ServicesSection />
            </Grid>
          </Grid>


      </Container>
    );
  }
}
Home.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
export default withStyles(styles)(Home);
