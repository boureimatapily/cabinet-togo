import React from "react";
import { withStyles } from "@material-ui/styles";
import { TextField, Button, Typography, Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { authenticateWithGoogle, login} from "../../redux/Actions/authActions"
import { connect } from "react-redux";
// import {toast} from "react-toastify"


// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";

const styles = {
 
  

  otheraccounts:{
      display:"flex",
      marginBottom:10
  },
  btnotheraccounts:{
      fontWeight:"bold",
      marginRight:10,
      marginBottom:10
  },
  getStartButton: {
    color: "white",
    backgroundColor: "#2bd69a",
    fontWeight: "bolder",
    marginBottom: 20,
  },
};


class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:""
    };
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onLogin = ()=>{
    this.props.history.push('/');
}
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.login(email, password, this.onLogin())
  };

    
  render() {
    const { classes } = this.props;
  return (
    <Container fixed >

      <Grid container> 
     
      <Grid item xs={12} md={12} lg={12} > 
    <div className={classes.loginSection}>
    
        <form autoComplete={"false"} className={classes.formSection} onSubmit={this.handleSubmit} >
          <TextField
            id="standard-basic"
            label="Email Address"
            placeholder="Email address "
            fullWidth
            /* variant="outlined" */
            required
            name="email"
            autoFocus
            // value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="validator">
            <TextField
              /* variant="outlined" */
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              //   value={this.state.password}
                onChange={this.handleChange}
            />
          </div>
          <Typography
            variant="body1"
            style={{ marginTop: 20, marginBottom: 10 }}
          >
             <Link to="/"> I forgot my password</Link>
          </Typography>
          <p style={{ marginTop:20 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.getStartButton}
              //   disabled={loginRequest}
            >
              Login
            </Button>
          </p>
        
        </form>
        <h3>Log In with Another Account</h3>
        <div className={classes.otheraccounts}>
        <Button
            variant="contained"
            color="primary"
            className={classes.btnotheraccounts}
            onClick={()=>{this.props.authenticateWithGoogle(this.onLogin)}}
          >
            Google
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btnotheraccounts}
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            // color="primary"
            className={classes.btnotheraccounts}
          >
            Twitter
          </Button>
        </div>

    </div>
    </Grid>

    </Grid>
    </Container>
  );
}
}


export default  withStyles(styles)(connect(null,{login, authenticateWithGoogle})(Login))
