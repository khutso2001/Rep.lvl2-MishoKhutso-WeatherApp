import React, { useState,useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Content.css';
import Card from "./Cards"
import Sidebar from "./SideBar/Sidebar"
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Paginations from "./Pagination";
import Loader from "./Loader";
import Api from "./api.js/api";
function Content() {
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect (()=>{
    setLoading(true);
   
           Api.getProductList()
           .then (resp=>setData(resp))
           .catch(err=>{
             console.log(err)
            })
            .finally(()=>{
              setLoading(false);
            })
  },[])
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
          <Loader isLoading={loading}>
          {!!data.length && data.map(el => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="clsnm" >
              <Card data={el} />
            </Grid>
          ))}
          </Loader>
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
