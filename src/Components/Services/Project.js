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

export default function Projecct() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
      <Grid container>
        <Grid xs={12} sm={12} md={8} lg={8} className={classes.rootContainer}>
          <h1>Etudes des projets </h1>
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
                label="USAGE"
                {...a11yProps(0)}
                style={{ fontWeight: "bolder" }}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Paper style={{ fontWeight: "bolder" }}>
                Les études de projet [PRO] ont pour objet : De préciser par des
                plans, coupes et élévations, les formes des différents éléments
                de la construction, la nature et les caractéristiques des
                matériaux et les conditions de leur mise en œuvre ; De
                déterminer l'implantation, et l'encombrement de tous les
                éléments de structure et de tous les équipements techniques ; De
                préciser les tracés des alimentations et évacuations de tous les
                fluides ; D'établir un coût prévisionnel des travaux décomposés
                par corps d'état, sur la base d'un avant-métré ; De permettre au
                maître de l'ouvrage, au regard de cette évaluation, d'arrêter le
                coût prévisionnel de la réalisation de l'ouvrage et, par
                ailleurs, d'estimer les coûts de son exploitation ; De
                déterminer le délai global de réalisation de l'ouvrage, et de
                faire l’étude de marchés.
              </Paper>
            </TabPanel>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid xs={0} sm={0} md={4} lg={4}>
            <img
              src={require("../../Images/pen.png")}
              alt="accountimg"
              style={{ width: 300, height: 200 }}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}
