import '../App.css';
import React , {useState} from 'react';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import ReactTooltip from "react-tooltip";
function Esienafu()
{
return(
<div className="App3">
<div class="container1">
<div class="form-group col-md-4">
<label for="esi2">ESI Number</label>
<input type="email" class="form-control" id="esi2" aria-describedby="emailHelp" placeholder="00-00-000000-000-0000"/>
</div>
<br/>

<div class="form-group col-md-4">
    <label for="dc2">Deduction Cycle</label>  <i className="fa fa-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Provident Fund (PF) contributions for each month should be deposited to the Employee Provident Fund Organisation (EPFO) within the 15th of the following month"></i>
    <input type="text" class="form-control" id="dc2" aria-describedby="emailHelp" value="Monthly" disabled/>
  </div>
  <br/>

  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="ec2"/>
  <label class="form-check-label" for="defaultCheck1">
    Include employer's contribution in the CTC
  </label>
</div>
<br/>

<button type="button" class="btn btn-link"> <i className="fa fa-check"> Enable</i></button>
<button type="button" class="btn btn-link"> <i className="fa fa-times"> Cancel</i></button>

</div>
</div>
);
}
export default Esienafu;