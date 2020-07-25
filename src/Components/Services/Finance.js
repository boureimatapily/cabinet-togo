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
          <h1>Preparation of financial statements</h1>
          <h4>
            In SYSCOAHADA, the financial statements are modulated according,
            essentially, to the size, financial and human resources of
            companies. There are three (3) systems for presenting financial
            statements
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
                <h4> The normal system </h4>
                It is mainly intended for medium and large enterprises whose
                annual turnover exceeds 100,000,000 FCFA but can be used by
                small enterprises wishing to better analyze their situation and
                their operations. It constitutes the frame of reference for
                common law and includes the obligation to draw up 4 summary
                documents: the income statement, the balance sheet, the TAFIRE,
                the annexed statement and the statistical supplementary
                statement.
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
                label="USAGE"
                {...a11yProps(0)}
                style={{ fontWeight: "bolder" }}
              />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Paper style={{ fontWeight: "bolder" }}>
                <h4> The lean system </h4>
                Reserved for small businesses (SMEs, SMIs) not exceeding a
                certain turnover threshold (turnover below 100,000,000 FCFA) and
                relatively small number of employees. Less developed than the
                normal system, it has 3 parts: the income statement, the balance
                sheet, the very simplified annexed state.
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
                label="VERY SMALL"
                {...a11yProps(0)}
                style={{ fontWeight: "bolder" }}
              />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Paper style={{ fontWeight: "bolder" }}>
                <h4> The minimum cash system  </h4>
                It is aimed at very small businesses and
                informal sector units whose annual revenues are below the
                threshold set in Article 13 of common law. This accounting
                system is based on cash accounting (revenue expenditure)
                respecting the rules of double entry.
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
