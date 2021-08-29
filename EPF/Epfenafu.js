import '../App.css';
import React , {useState} from 'react';
import Sampcalc from './Sampcalc';
import Samplecal1 from './Samplecal1';
import {Switch} from 'antd';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import Epf from './Epf';

function Epfenafu()
{
return(
<div id="App2">
<div class="container1">
<div class="form-group col-md-4">
    <label for="epfnum1">EPF Number</label>
    <input type="text" class="form-control" id="epfnum1" aria-describedby="emailHelp" placeholder="AA/AAA/0000000/000"/>
  </div>
  <br/>

  <div class="form-group col-md-4">
    <label for="ecr1">Employer Contribution Rate</label>
    <select class="form-select">
  <option>12% of Actual PF Wage</option>
  <option>Restrict Contribution to ₹15,000 of PF Wage</option>
</select>
  </div>
  <br/>

  <div class="form-group col-md-4">
    <label for="ecr2">Employee Contribution Rate</label>
    <select class="form-select">
  <option>12% of Actual PF Wage</option>
  <option>Restrict Contribution to ₹15,000 of PF Wage</option>
</select>
</div>
<br/>

<div class="form-group col-md-4">
    <label for="dc1">Deduction Cycle</label>  <i className="fa fa-info" data-toggle="tooltip" data-placement="bottom" title="Provident Fund (PF) contributions for each month should be deposited to the Employee Provident Fund Organisation (EPFO) within the 15th of the following month"></i>
    <input type="text" class="form-control" id="dc1" aria-describedby="emailHelp" value="Monthly" disabled/>
  </div>
  <br/>

<Sampcalc/>
<br/>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="empcont1"/>
  <label class="form-check-label" for="defaultCheck1">
    Include employer's contribution in the CTC
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="ovecont1"/>
  <label class="form-check-label" for="defaultCheck1">
    Override PF contribution rate at employee level
  </label>
</div>
<br/>
<h6>PF Configuration when LOP Applied</h6>
<br/>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="prorate1"/>
  <label class="form-check-label" for="defaultCheck1">
    <h6>Pro-rate Restricted PF wage</h6>
    PF contribution will be pro-rated based on the number of days worked by the employee.
  </label>
</div>
<br/>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="lop1" checked/>
  <label class="form-check-label" for="defaultCheck1">
    <h6>Consider all applicable PF components if PF wage is less than 15k after Loss of Pay</h6>
    PF wage will be computed using the salary earned in that particular month (based on LOP) rather than
    the actual amount mentioned in the salary structure.<Samplecal1/>
  </label>
</div>
<br/>
<button type="button" class="btn btn-link"> <i className="fa fa-check"> Enable</i></button>
<button type="button" class="btn btn-link"> <i className="fa fa-times"> Cancel</i></button>

</div>
</div>
);
}
export default Epfenafu;