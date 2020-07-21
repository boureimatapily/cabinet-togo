import React from "react";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import covid from "../Images/covid.jpg"
import PropTypes from 'prop-types';
import ServicesSection from "../Components/Home/ServicesSection";

// Making styles
const styles = theme =>({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  note: {
    marginTop: 50,
  },
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    alignItems:"center",
   
  },
  firstContainerFirstDiv: {
    width: '40%',

  },
  getStartButton:{
    color: "white", 
    backgroundColor: "#2bd69a", 
    width:200,
    fontWeight:"bolder"
  },
  covidImage:{
    width:"300",
    height:300,
  },
  secondContainer: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  secondContainerFirstDiv:{
    width:'40%'
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Container fixed>
                {/* first Container */}
        <Grid container style={{ marginTop: 10 }} className={classes.root}>
          <Grid item xs={12} md={12} lg={12}>
           
            <Paper elevation={0} className={classes.firstContainer}>
              <div className={classes.firstContainerFirstDiv}>
                <h2> Fight COVID-19 With Codetrain and Covid Care Platform </h2>
                <h4> Voluptate fugiat reprehenderit sint aliquip </h4>
                <Button 
                    className={classes.getStartButton}
                    >
                  Get Start
                </Button>
              </div>

              <div>
                <img src={covid} alt="covid-care" className={classes.covidImage} />
              </div>
            </Paper>
          </Grid>
        </Grid>
                           {/* second Container  */}
        <Grid container style={{ marginTop: 5 }}>
          <Grid item xs={12} md={12} lg={12}>
            
            <Paper elevation={0} className={classes.secondContainer}>
              <div className={classes.secondContainerFirstDiv}>
                  <h1> Covid Care & Codetrain </h1>
                  <h5 style={{marginTop:0}}> Covid care is helping Hospitals and health professionals  to the COVID 19
                     crisis with a modern Technology, collaborate work and sharing informations </h5>
              </div>
              <div>
                <ServicesSection />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
Home.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withStyles(styles)(Home);
