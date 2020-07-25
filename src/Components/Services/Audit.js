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

export default function Audit() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
      <Grid container>
        <Grid xs={12} sm={12} md={8} lg={8} className={classes.rootContainer}>
          <h1>Accounting audits</h1>
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
                label="ASSISTANCE"
                {...a11yProps(0)}
                style={{ fontWeight: "bolder" }}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Paper style={{ fontWeight: "bolder" }}>
                An accounting and financial audit is an examination the outcome
                of which makes it possible to express a reasoned opinion on the
                regularity and sincerity of a company's accounts. It helps to
                assess the control of a company's financial risks and to look
                for possible irregularities.
              </Paper>
            </TabPanel>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid xs={0} sm={0} md={4} lg={4}>
            <img
              src={require("../../Images/audit.png")}
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
                Accounting and financial audits can also provide technical
                support to companies in difficulty.
              </Paper>
            </TabPanel>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid xs={0} sm={0} md={4} lg={4}>
            <img
              src={require("../../Images/audit.png")}
              alt="accountimg"
              style={{ width: 300, height: 200 }}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}
