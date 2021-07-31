import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import "./SignUpButtonHeader.css";

const useStyles = makeStyles({

    signInButtonCenter:{
        justifyContent:'center',
    }
});
function SignUnButton() {
    const classes = useStyles();

  return (
    <Container>
        <Grid Container>
            <Grid item >
            <button className="button">
                Sign Up
            </button>
            </Grid>
        </Grid>
        

    </Container>
  )
};
export default SignUnButton;
