import React from 'react';
import './App.css';
import AllContent from "./MainLayout/AllContent";
import Admin from "../src/MainLayout/Pages/adminPanel/AdminPanel";
import SignIn from "./MainLayout/Pages/SignIn";
import SignUp from "./MainLayout/Pages/register/SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductItems from "./MainLayout/Pages/ProductItems";
import {PRODUCTITEMS,ALLLCONTENT,ADMIN,SIGN_IN,SIGN_UP} from "./MainLayout/Routes";
function App() {

  return (
     <Router>
        <Switch>
          <Route path={PRODUCTITEMS}>
            <ProductItems/>
          </Route>
          <Route path={ADMIN}>
            <Admin/>
          </Route>
          <Route path={SIGN_IN}>
            <SignIn/>
          </Route>
          <Route path={SIGN_UP}>
            <SignUp/>
          </Route>
          <Route path={ALLLCONTENT}>
            <AllContent/>
          </Route>
          
         
        </Switch>
     </Router>
  )
};

export default App;
