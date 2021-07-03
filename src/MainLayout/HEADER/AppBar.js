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

  const classes=useStyles();
  return (
    <React.Fragment>
      <CssBaseline/>
      <ElevationScroll {...props}>
        <AppBar >
          <Toolbar>
            <Typography variant="h6">MDB</Typography>
            <ShoppingCartIcon classes={{root:classes.root}}/>
            <FlagIcon/>
            <ul>
              <li><a href="#">SHOP</a></li>
              <li><a href="#">CONTACT</a></li>
              <li><a href="#">SIGN IN</a></li>
            </ul>
            <Button/>
          </Toolbar>
          
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    
    </React.Fragment>
  );
}