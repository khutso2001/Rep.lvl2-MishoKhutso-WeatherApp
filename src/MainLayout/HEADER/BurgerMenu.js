import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import "./BurgerMenu.css";
import { Menu } from '@material-ui/icons';
import {ALLLCONTENT,ADMIN,SIGN_IN,SIGN_UP} from "../Routes";
import {Link as MLink} from "@material-ui/core";
import {Link} from "react-router-dom";
import SignUnButton from "../component/SignUpButtonHeader";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  center:{
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default function BurgerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{display:'flex',flexDirection:'column',marginTop:'80px',padding:'10px'}}>
      <ul className={classes.center} >
                    <MLink style={{textDecoration:'none',fontSize:'15px',fontWeight:'bold'}} component ={Link} to={ALLLCONTENT}><li><a href="#">HOME</a></li> </MLink>                
                    <MLink style={{textDecoration:'none', fontSize:'15px',fontWeight:'bold'}} component ={Link} to={ADMIN}> <li><a href="#" >ADMIN</a></li></MLink>
                    <MLink style={{textDecoration:'none',fontSize:'15px',fontWeight:'bold'}} component={Link} to={SIGN_IN}><li><a href="#" className={classes.inline}>SIGN IN</a></li></MLink>
                    <MLink  style={{textDecoration:'none',fontSize:'15px',fontWeight:'bold'}}component={Link} to={SIGN_UP}><SignUnButton>sign up</SignUnButton>  </MLink>
                  </ul>
      </List>
    </div>
  );

  return (
    <div className="menuHide" >
        <React.Fragment  key={'menu'}> 
          <Button onClick={toggleDrawer('right', true)}>{<Menu/>}</Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('menu')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}