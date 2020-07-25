import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container, Grid, Paper } from "@material-ui/core";

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

export default function Account() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
      <Grid container>
        <Grid xs={12} sm={12} md={8} lg={8} className={classes.rootContainer}>
          <h1>Purpose of bookkeeping</h1>
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
                Bookkeeping consists of recording all the accounting documents
                (purchase or sale invoices, receipts, receipts, expense reports,
                etc.), according to the standard of the chart of accounts.
              </Paper>
            </TabPanel>
          </div>
        </Grid>
        <Grid xs={0} sm={0} md={4} lg={4}>
          <img
            src={require("../../Images/account.png")}
            alt="accountimg"
            style={{ width: 200, height: 200 }}
          />
        </Grid>
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
                Justify the use of company funds and certify accounting
                operations (purchase, payment of salaries, sale of goods or
                services, etc.) Meet the legal obligations of the tax
                administration: VAT, declaration of profits, declaration on
                income and certain social funds.
              </Paper>
            </TabPanel>
          </div>
        </Grid>
        <Grid xs={0} sm={0} md={4} lg={4}>
          <img
            src={require("../../Images/account.png")}
            alt="accountimg"
            style={{ width: 200, height: 200 }}
          />
        </Grid>
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
                label="PERSON"
                {...a11yProps(0)}
                style={{ fontWeight: "bolder" }}
              />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Paper style={{ fontWeight: "bolder" }}>
                The bookkeeping can be done within the company itself (by an
                accountant, a secretary, the manager ...) or entrusted to an
                accounting firm. Bookkeeping is not difficult but it requires a
                certain rigor and requires the systematic collection and
                issuance of supporting documents. Indeed, the accounting
                documents are the first elements examined during a financial
                control (internal or external).
              </Paper>
            </TabPanel>
          </div>
        </Grid>
        <Grid xs={0} sm={0} md={4} lg={4}>
          <img
            src={require("../../Images/account.png")}
            alt="accountimg"
            style={{ width: 200, height: 200 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
