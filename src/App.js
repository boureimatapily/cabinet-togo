import React from "react";
import Home from "./Pages/Home";
import Health from "./Pages/Health";
import Hospital from "./Pages/Hospital";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";


// import { fetchUser } from "./redux/Actions/authActions"
// import { connect } from "react-redux";
// import AppRoute from "./util/AppRoute";
import { ToastContainer } from "react-toastify"
import { connect } from "react-redux";




function App(){
  

// // Management authentification user first loading
// componentDidMount() {
//   // console.log(this.props);
//   const authUser = this.props.auth;
//   // console.log(authUser);
//   if (authUser.uid) {
//     store.dispatch({ type: LOGIN_SUCCESS });
//   } else {
//     store.dispatch(signout());
//   }
// }

    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
           
          />
         {/* <Route exact path="/chat" component={Chat} /> */}
          <Route exact path="/hospital" component={Hospital} />
          <Route exact path="/health" component={Health} />
         
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
      </React.Fragment>
    );
  }



// const mapDispatchToProps = dispatch => {
//   return {
//     getUserData: () => dispatch(getUserData()),
//     signout: () => dispatch(signout())
//   };
// };

export default connect(
  null,
  
)(App)
