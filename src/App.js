import React from 'react';
import './App.css';
import AllContent from "./MainLayout/AllContent";

import { Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProductItems from "./MainLayout/Pages/ProductItems";
import {Link as MLink} from "@material-ui/core";
import {PRODUCTITEMS,ALLLCONTENT} from "./MainLayout/Routes";
function App() {

  return (

  
     <Router>
       
       <MLink component ={Link} to={ALLLCONTENT}>AllContent</MLink>
       <MLink component ={Link} to={PRODUCTITEMS}>ProductItems</MLink>

        <Switch>
         
          <Route path={PRODUCTITEMS}>
            <ProductItems/>
          </Route>
          <Route path={ALLLCONTENT}>
            <AllContent/>
          </Route>
         
        </Switch>
     </Router>
 
      
  )
};

export default App;
