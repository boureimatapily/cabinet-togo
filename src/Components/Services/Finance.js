import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container, Grid, Paper, Hidden } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
    marginTop: 30,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Finance() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
      <Grid container>
        <Grid xs={12} sm={12} md={8} lg={8} className={classes.rootContainer}>
          <h1>Elaboration des états financiers </h1>
          <h4>
            Dans le SYSCOAHADA, les états financiers sont modulés en fonction,
            essentiellement, de la taille, des ressources financières et
            humaines des entreprises. Il existe trois (3) systèmes de
            présentation des états financiers :
          </h4>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab
                label="CONSISTANCE"
                {...a11yProps(0)}
                style={{ fontWeight: "bolder" }}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Paper style={{ fontWeight: "bolder" }}>
                <h4> Le système normal </h4>
                Il est prévu principalement pour les moyennes et grandes
                entreprises dont le chiffre d'affaires annuel est supérieur à
                100 000 000 FCFA mais peut être utilisée par de petites
                entreprises désireuses de mieux analyser leur situation et leurs
                opérations. Il constitue le référentiel du droit commun et
                comporte l'obligation d'établir 4 documents de synthèse :
                <ul>
                  <li>le compte de résultat </li>
                  <li>le bilan </li>
                  <li>le TAFIRE </li>
                  <li> l'état annexé et l'état supplémentaire statistique. </li>
                </ul>
              </Paper>
            </TabPanel>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid xs={0} sm={0} md={4} lg={4}>
            <img
              src={require("../../Images/finance.png")}
              alt="accountimg"
              style={{ width: 300, height: 200 }}
            />
          </Grid>
        </Hidden>
      </Grid>

      <Grid container>
        <Grid xs={12} sm={12} md={8} lg={8} className={classes.rootContainer}>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab
                label="CONSISTANCE"
                {...a11yProps(0)}
                style={{ fontWeight: "bolder" }}
              />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Paper style={{ fontWeight: "bolder" }}>
                <h4> Le système allégé </h4>
                Réservé aux petites entreprises (PME, PMI) ne dépassant pas un
                certain seuil de chiffre d'Affaire (chiffre d'affaires inférieur
                à 100 000 000FCFA) et d'effectifs de salariés relativement
                réduit. Moins développé que le système normal, il comporte 3
                parties :
                <ul>
                  <li>le compte de résultat, </li>
                  <li>le bilan </li>
                  <li> l'état annexé très simplifié.</li>
                </ul>
              </Paper>
            </TabPanel>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid xs={0} sm={0} md={4} lg={4}>
            <img
              src={require("../../Images/finance.png")}
              alt="accountimg"
              style={{ width: 300, height: 200 }}
            />
          </Grid>
        </Hidden>
      </Grid>

      <Grid container>
        <Grid xs={12} sm={12} md={8} lg={8} className={classes.rootContainer}>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab
                label="CONSISTANCE"
                {...a11yProps(0)}
                style={{ fontWeight: "bolder" }}
              />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Paper style={{ fontWeight: "bolder" }}>
                <h4> Le système minimal de trésorerie </h4>
                Il s'adresse aux très petites entreprises et aux unités du
                secteur informel dont les recettes annuelles sont inférieures au
                seuil fixé dans l'article 13 du droit commun. Ce système de
                comptabilité repose sur une comptabilité de trésorerie (recette
                dépenses) en respectant les règles de la partie double.
              </Paper>
            </TabPanel>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid xs={0} sm={0} md={4} lg={4}>
            <img
              src={require("../../Images/finance.png")}
              alt="accountimg"
              style={{ width: 300, height: 200 }}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}
