import React from 'react';

import './Input.css';


 function Input() {

  return (
     

<div>
    
<section class="mb-4">

<h6 class="font-weight-bold mb-3">Color</h6>

<div class="btn-group btn-group-toggle btn-color-group d-block mt-n2 ml-n2" data-toggle="buttons">
  <label class="btn rounded-circle white border-inset-grey p-3 m-2 waves-effect waves-light">
    <input type="checkbox" autocomplete="off">
  </label>
  <label class="btn rounded-circle grey p-3 m-2 waves-effect waves-light">
    <input type="checkbox" autocomplete="off">
  </label>
  <label class="btn rounded-circle black p-3 m-2 waves-effect waves-light">
    <input type="checkbox" autocomplete="off">
  </label>
  <label class="btn rounded-circle green p-3 m-2 waves-effect waves-light">
    <input type="checkbox" autocomplete="off">
  </label>
  <label class="btn rounded-circle blue p-3 m-2 waves-effect waves-light">
    <input type="checkbox" autocomplete="off">
  </label>
  <label class="btn rounded-circle purple p-3 m-2 waves-effect waves-light">
    <input type="checkbox" autocomplete="off">
  </label>
  <label class="btn rounded-circle yellow p-3 m-2 waves-effect waves-light">
    <input type="checkbox" autocomplete="off">
  </label>
  <label class="btn rounded-circle indigo p-3 m-2 waves-effect waves-light active">
    <input type="checkbox" checked="" autocomplete="off">
  </label>
  <label class="btn rounded-circle red p-3 m-2 waves-effect waves-light">
    <input type="checkbox" autocomplete="off">
  </label>
  <label class="btn rounded-circle orange p-3 m-2 waves-effect waves-light">
    <input type="checkbox" autocomplete="off">
  </label>
</div>

</section>
    
</div>

  );
}
export default Input;




