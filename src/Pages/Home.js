import React from "react";
import { Container, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
   display:"flex",
   flexDirection:"column",
   justifyContent:"space-between",
  
  },
  note:{
    marginTop:50
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container style={{ marginTop: 10}} className={classes.root}>
        <Grid item xs={12} md={12} lg={12}>
          <div className="hcontainer">
            <h4>  All about coding </h4>
          </div>
        </Grid>


       
      </Grid>
    </Container>
  );
}
