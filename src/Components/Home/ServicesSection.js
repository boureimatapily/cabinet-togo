import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../../util/Services";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  
}));

export default function ServicesSection() {
  const classes = useStyles();
  const ServiceList = [
          {
              id:1,
            iconImage:require('../../Images/covid.jpg'),
            description:"Hospital Registration",
            buttonText:"Get Start"
          },
          {
            id:2,
            iconImage:require('../../Images/covid.jpg'),
            description:"All information about Patient",
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
          }
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