import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Bookkeeping() {
  const classes = useStyles();
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Container fixed>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={10} md={12} lg={12}>
          <animated.div style={props}>
            <div>
              <h3>
                La tenue comptable ou tenue de la comptabilité consiste à
                enregistrer toutes les pièces comptables (factures d'achat ou de
                vente, reçus, quittances, notes de frais...) de l'entreprise,
                suivant la norme du plan comptable.
              </h3>
            </div>
          </animated.div>
          <animated.div style={props}>
            <div> style={{}}
              <h3>
                La tenue comptable ou tenue de la comptabilité consiste à
                enregistrer toutes les pièces comptables (factures d'achat ou de
                vente, reçus, quittances, notes de frais...) de l'entreprise,
                suivant la norme du plan comptable.
              </h3>
            </div>
          </animated.div>
          <animated.div style={props}>
            <div>
              <h3>
                La tenue comptable ou tenue de la comptabilité consiste à
                enregistrer toutes les pièces comptables (factures d'achat ou de
                vente, reçus, quittances, notes de frais...) de l'entreprise,
                suivant la norme du plan comptable.
              </h3>
            </div>
          </animated.div>
        </Grid>
      </Grid>
    </Container>
  );
}
