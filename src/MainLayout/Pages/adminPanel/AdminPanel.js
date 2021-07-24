import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from "./AdminHeader";
import { makeStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CategoryIcon from '@material-ui/icons/Category';
import Modal from "./Modal";
import Signup from "./SignUpformik";
import AdminTable from "./AdminPanelTable";
import ElevateAppBar from "../../Header/AppBar";
const useStyles = makeStyles({
    root: {
     flexDirection:'column',
    },
    linkLayout:{
        display: 'flex',
        justifyContent: 'space-normal',
    },
    maxWidth: {
        maxWidth:'1400px',
      },
      margin:{
          marginTop:'30px',
      }
  });
  
function Admin() {
    const classes = useStyles();

  return (
    <Container>
            <Grid Container direction='column' className={classes.maxWidth}>
                <Grid item>
                    <ElevateAppBar/>
                </Grid>
                <Grid Container className={classes.margin}>
                    <Grid item sx={4}>
                        <ul className={classes.root}>
                            <li className={classes.linkLayout}><LocalMallIcon/><a href="#"style={{fontSize:'18px',marginLeft:'10px'}}>PRODUCT</a></li>
                            <li className={classes.linkLayout}> <PersonIcon/><a href="#"style={{fontSize:'18px',marginLeft:'10px'}}>USERS</a></li>
                            <li className={classes.linkLayout}><CategoryIcon/><a href="#"style={{fontSize:'18px',marginLeft:'10px'}}>CATEGORIES</a></li>
                        </ul>
                    </Grid>
                    <Grid item 
                    
                    sx={8}>
                        <Grid item>
                        <AdminTable/>
                        </Grid>
                        <Modal>
                            <Signup/>
                        </Modal>
                    </Grid>
                </Grid>
            </Grid>
    </Container>
  )
};

export default Admin;
