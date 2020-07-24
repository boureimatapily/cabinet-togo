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
    marginBottom:20
  }
}));

export default function ServicesSection() {
  const classes = useStyles();
  const ServiceList = [
    {
      id: 1,
      iconImage: require("../../Images/chart.png"),
      description: "Bookkeeping",
      buttonText: "Get Start",
    },
    {
      id: 2,
      iconImage: require("../../Images/covid.jpg"),
      description: "Accounting and tax assistance",
      buttonText: "Get Start",
    },
    {
      id: 3,
      iconImage: require("../../Images/covid.jpg"),
      description: "Accounting audits",
      buttonText: "Get Start",
    },
    {
      id: 4,
      iconImage: require("../../Images/covid.jpg"),
      description: "Judicial expertise",
      buttonText: "Get Start",
    },
    {
      id: 5,
      iconImage: require("../../Images/covid.jpg"),
      description: "Project studies",
      buttonText: "Get Start",
    },
    {
      id: 6,
      iconImage: require("../../Images/covid.jpg"),
      description: "Preparation of financial statements",
      buttonText: "Get Start",
    },
    {
      id: 7,
      iconImage: require("../../Images/covid.jpg"),
      description: "Training",
      buttonText: "Get Start",
    },
    {
      id: 8,
      iconImage: require("../../Images/covid.jpg"),
      description: "All Others infos",
      buttonText: "Get Start",
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
              />
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
