import React from "react";
import { Container, Grid, Paper, Button} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

// styles
const styles = {
  root: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
   },
   note:{
     marginTop:50
   },
   firstContainer:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"space-evenly"
   },
};


class Home extends React.Component {
  
  render(){
    const { classes } = this.props;
 
  return (
    <Container fixed>
      <Grid container style={{ marginTop: 10}} className={classes.root}>
        <Grid item xs={12} md={12} lg={12}>
        <Paper elevation={1} className={classes.firstContainer}>  
          <div  >
            <h2>  Fight COVID-19 With Codetrain and Covid Care Platform </h2>
            <h4>  Voluptate fugiat reprehenderit sint aliquip  </h4>
            <Button style={{color:"white", backgroundColor:"#2bd69a"}} > Get Start</Button>
          </div>

          <div  >
            <h4>  All about coding </h4>
          </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
}

export default withStyles(styles)(Home)
