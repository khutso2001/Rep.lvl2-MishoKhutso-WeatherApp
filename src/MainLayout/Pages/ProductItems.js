import React, { useState }from 'react';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import Content from '../Content';
import ElevateAppBar from '../Header/AppBar';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import "./product-item.css";
import Quantity from "./Quantity";
import SelectedSize from "./SelectedSize";
import Button from '@material-ui/core/Button';
import FullWidthTabs from "./Tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    margin: '0px',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  borderBottom:{
    borderBottom:'1px solid black'
  }

}));
function ProductItem() {
  const classes = useStyles();

  return (
    < Container  >
      <ElevateAppBar />
      
      <Grid Container className="ProductPage">
        <Grid item >
          <h2 className="productPage">Product page</h2>
        </Grid>
      </Grid>
      <Grid Container  >
        <Grid item sx={6}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.</p>

        </Grid>
        <Grid item direction='column' sx={6}>
          <h4>Blue denim shirt</h4>
          <p>SHIRTS</p>
          <ul class="rating">
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
          </ul>
          <h3>$17.99</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.</p>
          <Grid item className={classes.borderBottom} >
            <Grid item direction='column' xs={3}>
              <h4>Model</h4>
              <h4>Color</h4>
              <h4>Delivery</h4>
            </Grid>
            <Grid item direction='column' xs={3}>
              <h4>Shirt 5407X</h4>
              <h4>Blue</h4>
              <h4>USA Europe</h4>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item>
              <Quantity />
            </Grid>
            <Grid item>
              <SelectedSize />
            </Grid>
          </Grid>
          <Grid item>
          <Button variant="contained" size="medium" color="primary" className={classes.margin}> Buy Now</Button>
          <Button variant="contained" size="medium" color="inherit" className={classes.margin}> ADD TO CARD</Button>
          </Grid>
        </Grid>
      </Grid>
<Grid Container>
<FullWidthTabs/>
</Grid>
      <Container className={classes.root}>
      <Footer />
      </Container>
      
    </Container>


  )

};

export default ProductItem;
