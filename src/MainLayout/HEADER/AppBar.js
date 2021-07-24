import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import "./AppBar.css";
import Button from "./SignUpButton";
import Grid from '@material-ui/core/Grid';
import { Menu } from '@material-ui/icons';
import { Box } from '@material-ui/core';
import SignUpButton from './SignUpButton';
import {Link as MLink} from "@material-ui/core";
import {Link} from "react-router-dom";
import {PRODUCTITEMS,ALLLCONTENT,ADMIN,SIGN_IN,SIGN_UP} from "../Routes";

const useStyles = makeStyles({
  root: {
   
  }
});

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};


export default function ElevateAppBar(props) {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll  {...props}>
        <AppBar color='inherit'>
          <Toolbar>
            <Grid Container item xs={12} >

              <Grid item justify='space-between' alignItems='center' xs={9} >
                <Typography variant="h6" ><p classNAme="bold">MDB</p></Typography>
                
                <Grid>
                <MLink component ={Link} to={ALLLCONTENT}>home </MLink>
                <MLink component ={Link} to={PRODUCTITEMS}>ProductPage</MLink>
                <MLink component ={Link} to={ADMIN}>Admin</MLink>
                <MLink component={Link} to={SIGN_IN}>SingIn</MLink>
                <MLink component={Link} to={SIGN_UP}>SignUp</MLink>

              </Grid>
                </Grid>
                  
              
             
              <Grid item alignItems='center' xs={3} >
              
                <Box className='toHide'>
                  
                  <ShoppingCartIcon classes={{ root: classes.root }} />
                  <FlagIcon />
                  <ul>
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">SIGN IN</a></li>
                  </ul>
                  <Button />
                  </Box>
            </Grid>
              </Grid>
              <Menu className='brg' />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
        <Toolbar />
    </React.Fragment>
      );
}