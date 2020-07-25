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
      image: require("../Images/pierre.png"),
      name: "Pierre Togo",
      job: "Accounting",
    },
    {
      id: "2",
      image: require("../Images/pierreA.png"),
      name: "Pierre Togo",
      job: "Accounting",
    },
    {
      id: "3",
      image: require("../Images/pierreT.png"),
      name: "Pierre Togo",
      job: "Accounting",
    },
    {
      id: "4",
      image: require("../Images/pierre.png"),
      name: "Pierre Togo",
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
              The accounting firm Antimé TOGO is registered with the National
            </span>
            <span style={{ fontWeight: "bolder" }}>
              Order of Chartered Accountants and Chartered Accountants of Mali
              (ONECCA-MALI).
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
              It is managed by Mr. TOGO Antimé, surrounded by a team of
              collaborators, lawyers and accountants at your disposal to advise
              and guide you.
            </span>
            <span style={{ fontWeight: "bolder" }}>
              With a large local clientele and his years of experience, he
              intervenes and masters various environments, whether in terms of
              staff or business sector. The Firm has a daily updated website,
              and sends you by e-mail a summary of the main points of legal and
              regulatory news.
            </span>
            <span style={{ fontWeight: "bolder" }}>
              It is located in Kalaban coura ACI street 288 gate 575 not far
              from the airport road around 30 meters.
            </span>
            <span style={{ fontWeight: "bolder" }}>
              The organization of work is established according to the needs of
              the client, from the smallest to the largest, the Firm knows how
              to adapt to each. A very special place is reserved for customer
              reminders during the day and for reactivity to give a quick answer
              to any question.
            </span>
            <h5>
              Contact us to find out more about our support and our services on
              the site, email from the firm : antimetogo@cabinetcomptabletogo.ml
              or by email antimetogo@yahoo.com
            </h5>
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
