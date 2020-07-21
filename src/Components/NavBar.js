import React,  {  useState } from 'react';
import   firebase  from '../Config/fbconfig';
import SignedinNavBar from './SignedinNavBar';
import SignedoutNavBar from './SignedoutNavBar';




 function NavBar() {
 
    const [isAuthenticated, setIsAuthenticated] = useState("")

  firebase.auth().onAuthStateChanged(
        (user)=>{
          if(user){
            setIsAuthenticated("loggedin")
           
          }else{
            setIsAuthenticated("loggedout")
           
          }
        }
  )

   return(
     <div>
            { isAuthenticated === "loggedin" &&   <SignedinNavBar /> }
            { isAuthenticated === "loggedout" &&   <SignedoutNavBar /> }
     </div>
   )
}


export default NavBar 






// <Link to="/">
// {" "}
// <Button variant="contained" color="primary" className={classes.navButton}>Cabinet Comptable Togo</Button>{" "}
// </Link>
            
// <Link to="/login">
// {" "}
// <Button variant="contained" color="primary" className={classes.navButton}>Login</Button>{" "}
// </Link>

// <Link to="/signup">
// {" "}
// <Button variant="contained" color="primary" className={classes.navButton}>Sign up</Button>
// </Link>
