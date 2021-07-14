import React from 'react';
import "./Color.css"
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

 function Color() {

  return (
    <Container>
      <Grid Container xs={3} >
        <Grid item direction='column' xs={3}>
        <Grid item xs={3}>
        <h3 class="text-uppercase">colors</h3>
        </Grid>
         <Grid item xs={3}>
            <ul className="forstyle">
                <li class="color-1"></li>
                <li class="color-2"></li>
                <li class="color-3"></li>
                <li class="color-4"></li>
                <li class="color-5"></li>
                <li class="color-6"></li>
                <li class="color-7"></li>
                <li class="color-8"></li>
                <li class="color-9"></li>
                <li class="color-10"></li>
            </ul>
 
        </Grid>
        </Grid>
        
      </Grid>
    </Container>
   

  );
}
export default Color;




