import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "../Home/Home.css";
// import { Link } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StyleOne from "../StyleComponents/style1/StyleOne";
import StyleTwo from "../StyleComponents/style2/StyleTwo";
import StyleFor from "../StyleComponents/style4/StyleFor";
import StyleThree from "../StyleComponents/style3/StyleThree";
import StyleFive from "../StyleComponents/style5/StyleFiveive";




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
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
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  tabvalue: {
    width: "100%",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Style 1" {...a11yProps(0)} />
        <Tab label="Style 2" {...a11yProps(1)} />
        <Tab label="Style 3" {...a11yProps(2)} />
        <Tab label="Style 4" {...a11yProps(3)} />
        <Tab label="Style 5" {...a11yProps(4)} />
        <Tab label="Style 6" {...a11yProps(5)} />
        <Tab label="Style 7" {...a11yProps(6)} />
      </Tabs>

      <TabPanel value={value} index={0} className={classes.tabvalue}>
        <div className="hcontainer">
          <h4> Codetrain</h4>
        </div>
        <div>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                Codetrain Light
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabvalue}>
        <StyleOne />

        <div>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Neon light</Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabvalue}>
        <StyleTwo />
        <div style={{ marginTop: 50, marginBottom:20 }}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                Awesome Codetrain
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
    
      <TabPanel value={value} index={3} className={classes.tabvalue}>
        <StyleFor />
        <div style={{ marginTop: 50, marginBottom: 20 }}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
               Make it come true
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.tabvalue}>
      <StyleThree />
        <div style={{ marginTop: 50, marginBottom: 20 }}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
               Make it come true
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5} className={classes.tabvalue}>
      <StyleFive />
        <div style={{ marginTop: 10, marginBottom: 20 }}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
               Make it come true
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={6} className={classes.tabvalue}>
      <StyleFor />
        <div style={{ marginTop: 50, marginBottom: 100 }}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
               Make it come true
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
    </div>
  );
}
