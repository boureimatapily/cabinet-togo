import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../../util/Services";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    flexWrap:"wrap"
  },
  
}));

export default function ServicesSection() {
  const classes = useStyles();
  const ServiceList = [
          {
              id:1,
            iconImage:require('../../Images/covid.jpg'),
            description:"Bookkeeping",
            buttonText:"Get Start"
          },
          {
            id:2,
            iconImage:require('../../Images/covid.jpg'),
            description:"Accounting and tax assistance",
            buttonText:"Get Start"
          },
          {
            id:3,
            iconImage:require('../../Images/covid.jpg'),
            description:"Health Profesional communication",
            buttonText:"Get Start"
          },
          {
            id:4,
            iconImage:require('../../Images/covid.jpg'),
            description:"Health Profesional communication",
            buttonText:"Get Start"
          },
          {
            id:5,
            iconImage:require('../../Images/covid.jpg'),
            description:"Health Profesional communication",
            buttonText:"Get Start"
          },
          {
            id:6,
            iconImage:require('../../Images/covid.jpg'),
            description:"Health Profesional communication",
            buttonText:"Get Start"
          },
          {
            id:7,
            iconImage:require('../../Images/covid.jpg'),
            description:"Health Profesional communication",
            buttonText:"Get Start"
          },
          {
            id:8,
            iconImage:require('../../Images/covid.jpg'),
            description:"Health Profesional communication",
            buttonText:"Get Start"
          },
        
  ]
 
  return (
    <div className={classes.root}>
         
        {ServiceList.map((list)=>(
            <div key={list.id}>
                     <Services description={list.description} buttonText={list.buttonText} image={list.iconImage} />
            </div>
        ))}
       
    </div>
  );
}