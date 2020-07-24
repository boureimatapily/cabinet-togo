import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../../util/Services";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  serviceRoot:{
    width:300,
    height:300,
  }
}));

export default function ServicesSection() {
  const classes = useStyles();
  const ServiceList = [
    {
      id: 1,
      iconImage: require("../../Images/chart.png"),
      description: "Bookkeeping",
      buttonText: "more...",
      link:"/bookkeeping"
    },
    {
      id: 2,
      iconImage: require("../../Images/account.png"),
      description: "Accounting and tax assistance",
      buttonText: "more...",
      link:"/account"
    },
    {
      id: 3,
      iconImage: require("../../Images/audit.png"),
      description: "Accounting audits",
      buttonText: "more...",
      link:"/audit"
    },
    {
      id: 4,
      iconImage: require("../../Images/judge.png"),
      description: "Judicial expertise",
      buttonText: "more...",
      link:"/judge"
    },
    {
      id: 5,
      iconImage: require("../../Images/pen.png"),
      description: "Project studies",
      buttonText: "more...",
      link:"/project"
    },
    {
      id: 6,
      iconImage: require("../../Images/finance.png"),
      description: "Preparation of financial statements",
      buttonText: "more...",
      link:"/finance"
    },
    {
      id: 7,
      iconImage: require("../../Images/judgeI.png"),
      description: "Training",
      buttonText: "more...",
      link:"/training"
    },
    {
      id: 8,
      iconImage: require("../../Images/contact.png"),
      description: "All Others infos",
      buttonText: "more...",
      link:"/contact"
    },
    
   
  ];

  return (
    <Grid container>
      <Grid item sm={12} xs={12} md={12} lg={12}>
        <div className={classes.root}>
          {ServiceList.map((list) => (
            <div key={list.id} className={classes.serviceRoot}>
              <Services
                description={list.description}
                buttonText={list.buttonText}
                image={list.iconImage}
                link={list.link}
              />
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
