import React from "react";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Account from './Components/Services/Account'
import Audit from './Components/Services/Audit'
import Bookkeeping from './Components/Services/Bookkeeping'
import Finance from './Components/Services/Finance'
import Project from './Components/Services/Project'
import Training from './Components/Services/Training'
// import AppRoute from "./util/AppRoute";

import Judge from "./Components/Services/Judge";
import Contact from "./Pages/Contact";
import About from "./Pages/About";




function App(){

    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
           
          />
         
          <Route exact path="/account" component={Account} />
          <Route exact path="/audit" component={Audit} />
          <Route exact path="/bookkeeping" component={Bookkeeping} />
          <Route exact path="/finance" component={Finance} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/judge" component={Judge} />
          <Route exact path="/training" component={Training} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />

        </Switch>
      </React.Fragment>
    );
  }


export default App
