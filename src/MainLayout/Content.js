import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Content.css';
import Card from "./Cards"
import Sidebar from "./SideBar/Sidebar"
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Paginations from "./Pagination"
function Content() {
  const [data, setData] = useState([
    {
      title: 'dress',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      price: '99,9',
      id:'1'
    },
    {
      title: 'dress',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      price: '99,9',
      id:'2'
    },
    {
      title: 'dress',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      price: '99,9',
      id:'3'
    },
    {
      title: 'dress',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      price: '99,9',
      id:'4'
    }, {
      title: 'dress',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      price: '99,9',
      id:'5'
    },
    {
      title: 'dress',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      price: '99,9',
      id:'6'
    }, 
    {
      title: 'dress',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      price: '99,9',
      id:'7'
    }, 
    {
      title: 'dress',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      price: '99,9',
      id:'8'
    },
    {
      title: 'dress',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      price: '99,9',
      id:'9'
    },

  ]);
  return (

    <Container maxWidth="xl">
      <Grid Container className="contentname" >
        <Grid item  sx={12}>
          <Sidebar sm={12} md={12} lg={3} xl={3}/>
        </Grid>
        <Grid  item justify='space-between' className="content_product" xs={9}  >
          <Grid item xs={12} justify='space-between' alignItems='center'>
            <Grid item >
              <ViewListIcon style={{ fontSize: 40 }} />
              <ViewModuleIcon style={{ fontSize: 40 }} />
            </Grid>
            <p>Label Example</p>
            <Paginations />
          </Grid>
          {data.map(el => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="clsnm" >
              <Card data={el} />
            </Grid>
          ))}
          <Grid item xs={12} justify='space-between'>
            <Grid item >
              <ViewListIcon style={{ fontSize: 40 }} />
              <ViewModuleIcon style={{ fontSize: 40 }} />
            </Grid>
            <p>Label Example</p>
            <Paginations />
          </Grid>
        </Grid>
      </Grid>
    </Container>

  )

};

export default Content;
