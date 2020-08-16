import React from "react";
// import RGF from "react-google-forms";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    height: "100%",
    width: "100%",
    borderWidth:0
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container>
        '<h1> Contactez Nous</h1>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.193406982219!2d-7.990856685699129!3d12.56949522697584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM0JzEwLjIiTiA3wrA1OScxOS4yIlc!5e0!3m2!1sen!2sgh!4v1595693583310!5m2!1sen!2sgh"
            height="300"
            width="100%"
            frameborder="0"
            title="location"
          ></iframe>
        </Grid>
      </Grid>
      <Grid container  style={{ marginTop: 50 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper style={{ marginRight:10 }}>
            <h3>
              Kalaban coura ACI rue 288 porte 575 non loin de la route de
              l’aoeport vers 30 mètres.
            </h3>
            <h3>
              <ul>
                <li>Fixe: 20 28 53 10 </li>
               
              </ul>
            </h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper style={{height:750, width:"100%"}}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfeoQJGGCOgC6xPLX1FuEcY4dKHqc56wP0wtxsIPKilxfSfRw/viewform?embedded=true"
              title="contact form"
              className={classes.form}
            >
              Loading…
            </iframe>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
