import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import Staff from "../util/Staff";

const useStyles = makeStyles((theme) => ({
  serviceRoot: {
    width: 300,
    height: 300,
  },
  serviceRootContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
  staffContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 30,
  },
}));

export default function About() {
  const classes = useStyles();

  const staffList = [
    {
      id: "1",
      image: require("../Images/samuel.jpg"),
      name: "Samuel Togo",
      job: "Comptable",
    },
    {
      id: "2",
      image: require("../Images/pierreA.png"),
      name: "Pierre Togo",
      job: "Auditeur Financier",
    },
    {
      id: "3",
      image: require("../Images/pierreT.png"),
      name: "Cabinet",
      job: "Accounting",
    },
    {
      id: "4",
      image: require("../Images/pierre.png"),
      name: "Cabinet",
      job: "Accounting",
    },
  ];

  return (
    <Container fixed>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.titleContainer}
        >
          <Paper elevation={0} className={classes.title}>
            <span style={{ fontWeight: "bolder" }}>
              {" "}
              Cabinet Comptable Antime Togo{" "}
            </span>
            <span style={{ fontWeight: "bolder" }}>
            Le cabinet comptable Antimé TOGO est inscrit au tableau de l’Ordre National
            </span>
            <span style={{ fontWeight: "bolder" }}>
            des Experts Comptable et Comptable Agrées du Mali (ONECCA-MALI).
            </span>
          </Paper>
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.titleContainer}
        >
          <Paper elevation={0} className={classes.title}>
            <span style={{ fontWeight: "bolder" }}>
            Il est dirigé par Monsieur TOGO Antimé, entouré d'une équipe de collaborateurs,
             juristes et comptables  à votre écoute pour vous conseiller et orienter.
            </span>
            <span style={{ fontWeight: "bolder" }}>
            Fort d'une importante clientèle locale et de ses années d'expérience,
             il intervient et maîtrise des environnements variés que ce soit en termes 
             d'effectifs ou de secteur d’activités. Le Cabinet est doté d'un site internet mis à jour quotidiennement, 
             et vous adresse par e-mail une synthèse des principaux points de l'actualité légale et réglementaire.

            </span>
            <span style={{ fontWeight: "bolder" }}>
            Il est situé à Kalaban coura ACI rue 288 porte 575 non loin de la route de l’aoeport vers 30 mètres.
            </span>
            <span style={{ fontWeight: "bolder" }}>
            L'organisation du travail est établie en fonction des besoins du client, du plus petit au plus grand,
             le Cabinet sait s'adapter à chacun. Une place toute particulière est réservée au rappel des clients 
             dans la journée et à la réactivité pour donner une réponse rapide à toute question.
            </span>
            <h3 style={{ fontWeight: "bolder" }}>
            Contactez-nous pour en savoir plus sur notre accompagnement et nos services sur le site mail du
             cabinet antimetogo@cabinetcomptabletogo.ml ou  antimetogo@yahoo.com
            </h3>
          </Paper>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.staffContainer}
        >
          <Grid item sm={12} xs={12} md={12} lg={12}>
            <div className={classes.serviceRootContainer}>
              {staffList.map((staff) => (
                <div key={staff.id} className={classes.serviceRoot}>
                  <Staff
                    image={staff.image}
                    name={staff.name}
                    job={staff.job}
                  />
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
