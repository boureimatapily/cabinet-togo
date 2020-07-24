import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function Project() {
  const classes = useStyles();
 
  return (
      <Container fixed>
          <Grid container className={classes.root}>
              <Grid item xs={12} sm={10} md={12} lg={12}>
                <h3>
                La tenue comptable ou tenue de la comptabilité consiste à enregistrer 
                toutes les pièces comptables (factures d'achat ou de vente, reçus, quittances, notes de frais...)
                 de l'entreprise, suivant la norme du plan comptable.
                </h3>
              </Grid>
          </Grid>
      </Container>
    
  );
}